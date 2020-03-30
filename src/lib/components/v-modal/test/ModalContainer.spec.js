import { createLocalVue, mount } from '@vue/test-utils';

import ModalContainer from '../ModalContainer.vue';

import TestModal from './TestModal.vue';

const propsData = {
  modal: 'demo-modal',
  modalProps: {
    title: 'demo modal',
    message: 'Lorem ipsum',
  },
  showModal: false,
};

const localVue = createLocalVue();

localVue.component('demo-modal', TestModal);

describe('Modal Container Component', () => {
  let modalContainerComponent;

  beforeAll(jest.useFakeTimers);

  beforeEach(() => {
    modalContainerComponent = mount(ModalContainer, { propsData, localVue });
  });

  it('should render', () => {
    expect(modalContainerComponent.exists()).toBeTruthy();
  });

  describe('#when the modal is shown', () => {
    let backdrop;
    let testModalComponent;

    beforeEach(async () => {
      modalContainerComponent.setProps({ showModal: true });
      await modalContainerComponent.vm.$nextTick();

      backdrop = modalContainerComponent.find('.backdrop');
      testModalComponent = modalContainerComponent.find(TestModal);
    });

    it('should show the backdrop', () => {
      expect(backdrop.exists()).toBeTruthy();
    });

    it('should notify the closed modal when the backdrop is clicked', () => {
      backdrop.trigger('click');
      const [[modal]] = modalContainerComponent.emitted('modal-closed');
      expect(modal).toEqual(propsData.modal);
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
  });
});
