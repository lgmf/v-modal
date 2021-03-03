import { mount } from '@vue/test-utils';

import { ModalEventBus } from '../../../utils';

import ModalContainer from '../ModalContainer.vue';

import TestModal from './TestModal.vue';

jest.mock('../../../utils', () => ({
  ModalEventBus: {
    $emit: jest.fn()
  },
  EventsTypes: {
    CLOSED: 'closed',
  }
}))

const $modal = {
  show: jest.fn(),
  hide: jest.fn(),
  _setModalContainerRef: jest.fn(),
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

describe('Modal Container Component', () => {
  let modalContainerComponent;

  beforeAll(jest.useFakeTimers);

  beforeAll(() => {
    modalContainerComponent = mount(ModalContainer, { mocks });
  });

  it('should render', () => {
    expect(modalContainerComponent.exists()).toBeTruthy();
  });

  describe('#when the modal is shown', () => {
    let backdrop;
    let testModalComponent;

    beforeAll(async () => {
      modalContainerComponent.vm.open(TestModal, modalOptions);
      await modalContainerComponent.vm.$nextTick();

      backdrop = modalContainerComponent.find('.backdrop');
      testModalComponent = modalContainerComponent.find(TestModal);
    });

    it('should set the modal container container ref', () => {
      expect(mocks.$modal._setModalContainerRef).toHaveBeenCalledTimes(1);
      expect(mocks.$modal._setModalContainerRef).toHaveBeenCalledWith(modalContainerComponent.vm);
    })

    it('should show the backdrop', () => {
      expect(backdrop.exists()).toBeTruthy();
    });

    it('should show the modal component', () => {
      expect(testModalComponent.exists()).toBeTruthy();
    });

    it('should focus the modal', () => {
      testModalComponent.element.focus = jest.fn();
      jest.advanceTimersByTime(10);
      expect(testModalComponent.element.focus).toHaveBeenCalled();
    });

    it('should bind the modal props correctly', () => {
      expect(testModalComponent.props()).toEqual(modalOptions.propsData);
    });

    it('should bind the modal listeners correctly', () => {
      expect(testModalComponent.vm.$listeners).toHaveProperty('on-finish');
    });

    it('should notify a closed modal event', () => {
      ModalEventBus.$emit.mockClear();
      backdrop.trigger('click');
      expect(ModalEventBus.$emit).toHaveBeenCalledWith('closed', testModalComponent.vm);
    });
  });
});
