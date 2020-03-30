import { createLocalVue, mount } from '@vue/test-utils';

import ModalContainer from '../ModalContainer.vue';

import TestModal from './TestModal.vue';

const $modal = {
  show: jest.fn(),
  hide: jest.fn()
}

const mocks = {
  $modal
};

const propsData = {
  modal: 'demo-modal',
  modalProps: {
    title: 'demo modal',
    message: 'Lorem ipsum',
  },
  listeners: {
    'on-finish': () => { }
  }
};

const localVue = createLocalVue();

localVue.component('demo-modal', TestModal);

describe('Modal Container Component', () => {
  let modalContainerComponent;

  beforeAll(jest.useFakeTimers);

  beforeEach(() => {
    modalContainerComponent = mount(ModalContainer, { localVue, mocks });
  });

  it('should render', () => {
    expect(modalContainerComponent.exists()).toBeTruthy();
  });

  describe('#when the modal is shown', () => {
    let backdrop;
    let testModalComponent;

    beforeEach(async () => {
      modalContainerComponent.vm.add(propsData.modal, propsData.modalProps, propsData.listeners);
      await modalContainerComponent.vm.$nextTick();

      backdrop = modalContainerComponent.find('.backdrop');
      testModalComponent = modalContainerComponent.find(TestModal);
    });

    it('should show the backdrop', () => {
      expect(backdrop.exists()).toBeTruthy();
    });

    it('should notify a closed modal event', () => {
      backdrop.trigger('click');
      expect(modalContainerComponent.emitted('modal-closed')).toBeTruthy();
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
      expect(testModalComponent.props()).toEqual(propsData.modalProps);
    });

    it('should bind the modal listeners correctly', () => {
      expect(testModalComponent.vm.$listeners).toHaveProperty('on-finish');
    });
  });
});
