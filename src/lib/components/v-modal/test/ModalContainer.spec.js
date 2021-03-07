import { mount } from '@vue/test-utils';

import { ModalEventBus } from '../../../utils';

import ModalContainer from '../ModalContainer.vue';

import FirstModal from './FirstModal.vue';
import SecondModal from './SecondModal.vue';

const $modal = {
  show: jest.fn(),
  hide: jest.fn(),
}

const stubs = {
  'keep-alive': {
    template: '<div class="keep-alive"><slot /></div>'
  },
  'transition': {
    props: ['name'],
    template: '<div class="transition"><slot /></div>'
  },
  'transition-group': {
    props: ['name'],
    template: '<div class="transition-group"><slot /></div>'
  }
}

const mocks = {
  $modal
};

const modalOptions = {
  propsData: {
    title: 'demo modal',
    message: 'Lorem ipsum',
  },
  on: {
    'on-finish': () => { }
  }
};

const options = {
  stubs,
  mocks,
}

jest.mock('../../../utils', () => ({
  ModalEventBus: {
    $emit: jest.fn()
  },
  EventsTypes: {
    CLOSED: 'closed',
    OPENED: 'opened',
  }
}));

describe('Modal Container Component', () => {
  beforeAll(jest.useFakeTimers);

  describe('transitions', () => {
    let modalContainerComponent;

    beforeAll(async () => {
      modalContainerComponent = mount(ModalContainer, options);
      await modalContainerComponent.vm.open(FirstModal, modalOptions);
      await modalContainerComponent.vm.$nextTick();
    });

    it('should cache rendered modals', () => {
      const KeepAlive = modalContainerComponent.find('.keep-alive');
      expect(KeepAlive.exists()).toBe(true);
    });

    it('should have a backdrop transition', () => {
      const Transition = modalContainerComponent.find('.transition');
      expect(Transition.props('name')).toBe('backdrop-shown');
    });

    it('should have a modal stack transition', () => {
      const TransitionGroup = modalContainerComponent.find('.transition-group');
      expect(TransitionGroup.props('name')).toBe('modal-shown');
    });
  });

  describe('with single modal', () => {
    let modalContainerComponent;
    let backdrop;
    let firstModalComponent;

    beforeAll(async () => {
      modalContainerComponent = mount(ModalContainer, options);
      await modalContainerComponent.vm.open(FirstModal, modalOptions);
      backdrop = modalContainerComponent.find('.backdrop');
      firstModalComponent = modalContainerComponent.find(FirstModal);
      await modalContainerComponent.vm.$nextTick();
    });

    it('should notify a opened modal event', () => {
      expect(ModalEventBus.$emit).toHaveBeenCalledWith('opened', firstModalComponent.vm);
    });

    it('should show the backdrop', () => {
      expect(backdrop.exists()).toBeTruthy();
    });

    it('should show the modal component', () => {
      expect(firstModalComponent.exists()).toBeTruthy();
    });

    it('should focus the modal', () => {
      firstModalComponent.element.focus = jest.fn();
      jest.advanceTimersByTime(10);
      expect(firstModalComponent.element.focus).toHaveBeenCalled();
    });

    it('should bind the modal props correctly', () => {
      expect(firstModalComponent.props()).toEqual(modalOptions.propsData);
    });

    it('should bind the modal listeners correctly', () => {
      expect(firstModalComponent.vm.$listeners).toHaveProperty('on-finish');
    });

    it('should notify a closed modal event', async () => {
      ModalEventBus.$emit.mockClear();
      backdrop.trigger('click');
      await modalContainerComponent.vm.$nextTick();
      expect(ModalEventBus.$emit).toHaveBeenCalledWith('closed', firstModalComponent.vm);
    });
  });

  describe('with multiple modals', () => {
    let modalContainerComponent;
    let backdrop;
    let firstModalComponent;
    let secondModalComponent;

    beforeAll(async () => {
      modalContainerComponent = mount(ModalContainer, options);
      await modalContainerComponent.vm.open(FirstModal, modalOptions);
      await modalContainerComponent.vm.open(SecondModal, modalOptions);
      backdrop = modalContainerComponent.find('.backdrop');
      firstModalComponent = modalContainerComponent.find(FirstModal);
      secondModalComponent = modalContainerComponent.find(SecondModal);
      await modalContainerComponent.vm.$nextTick();
    });

    it('should notify a opened modal event', () => {
      expect(ModalEventBus.$emit).toHaveBeenCalledWith('opened', firstModalComponent.vm);
      expect(ModalEventBus.$emit).toHaveBeenCalledWith('opened', secondModalComponent.vm);
    });

    it('should show the backdrop', () => {
      expect(backdrop.exists()).toBeTruthy();
    });

    it('should stack the modals', () => {
      expect(modalContainerComponent.vm.modals).toHaveLength(2);
    });

    it('should have the correct top index reference', () => {
      expect(modalContainerComponent.vm.top).toBe(1);
    })

    it('should show only the modal on top of the stack', () => {
      expect(firstModalComponent.isVisible()).toBe(false);
      expect(secondModalComponent.isVisible()).toBe(true);
    });

    describe('pop', () => {
      beforeAll(() => {
        ModalEventBus.$emit.mockClear();
      });

      it('should close the modal on top', async () => {
        await modalContainerComponent.vm.close();
        expect(ModalEventBus.$emit).toHaveBeenCalledWith('closed', secondModalComponent.vm);
        expect(firstModalComponent.isVisible()).toBe(true);
        expect(secondModalComponent.exists()).toBe(false);
      });

      it('should close the last modal', async () => {
        await modalContainerComponent.vm.close();
        expect(ModalEventBus.$emit).toHaveBeenCalledWith('closed', firstModalComponent.vm);
        expect(firstModalComponent.exists()).toBe(false);
        expect(secondModalComponent.exists()).toBe(false);
      });
    });
  });
});
