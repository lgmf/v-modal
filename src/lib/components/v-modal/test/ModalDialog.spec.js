import { shallowMount } from '@vue/test-utils';

import ModalDialog, { ModalDialogKeyboardControls } from '../ModalDialog.vue';

const propsData = {
  identifier: 'test-modal',
};

const slots = {
  header: '<h1>test modal</h1>',
  body: 'Lorem ipsum',
  footer: '<button>finish</button>',
};

describe('Modal Dialog Component', () => {
  let modalDialogComponent;

  beforeEach(() => {
    modalDialogComponent = shallowMount(ModalDialog, { propsData, slots });
    modalDialogComponent.vm.$parent.$emit = jest.fn();
  });

  it('should have a dialog role', () => {
    expect(modalDialogComponent.attributes('role')).toEqual('dialog');
  });

  it('should be focusable', () => {
    expect(modalDialogComponent.attributes('tabindex')).toEqual('0');
  });

  it('should set the identifier on a data attribute', () => {
    expect(modalDialogComponent.attributes('data-modal')).toEqual(propsData.identifier);
  });

  it('should render the header', () => {
    const header = modalDialogComponent.find('.header');
    expect(header.html()).toContain(slots.header);
  });

  it('should render the body', () => {
    const body = modalDialogComponent.find('.body');
    expect(body.html()).toContain(slots.body);
  });

  it('should render the footer', () => {
    const footer = modalDialogComponent.find('.footer');
    expect(footer.html()).toContain(slots.footer);
  });

  describe('#header\'s "x" button click', () => {
    beforeEach(() => {
      const xButton = modalDialogComponent.find('.header > .close');
      xButton.trigger('click');
    });

    it('should notify a close event', () => {
      expect(modalDialogComponent.emitted('modal-dialog-closed')).toBeTruthy();
    });

    it('should emit the modal identifier', () => {
      const [[event]] = modalDialogComponent.emitted('modal-dialog-closed');
      expect(event).toEqual(propsData.identifier);
    });

    it('should notify to the parent a close event with the modal identifier', () => {
      expect(modalDialogComponent.vm.$parent.$emit).toHaveBeenCalledWith('modal-dialog-closed', propsData.identifier);
    });
  });

  describe('#keyboard interactions', () => {
    describe('unsupported key', () => {
      beforeEach(() => {
        modalDialogComponent.trigger('keyup', { key: 'invalid' });
      });

      it('should NOT notify a close event', () => {
        expect(modalDialogComponent.emitted('modal-dialog-closed')).toBeUndefined();
      });

      it('should NOT notify a close event to the parent', () => {
        expect(modalDialogComponent.vm.$parent.$emit).not.toHaveBeenCalled();
      });
    });

    describe('escape', () => {
      beforeEach(() => {
        modalDialogComponent.trigger('keyup', { key: ModalDialogKeyboardControls.ESCAPE });
      });

      it('should notify a close event', () => {
        expect(modalDialogComponent.emitted('modal-dialog-closed')).toBeTruthy();
      });

      it('should emit the modal identifier', () => {
        const [[event]] = modalDialogComponent.emitted('modal-dialog-closed');
        expect(event).toEqual(propsData.identifier);
      });

      it('should notify to the parent a close event with the modal identifier', () => {
        expect(modalDialogComponent.vm.$parent.$emit).toHaveBeenCalledWith('modal-dialog-closed', propsData.identifier);
      });
    });
  });

  describe('#invalid props', () => {
    it('should warn when the modal identifier is not given', () => {
      console.error = jest.fn();
      shallowMount(ModalDialog);
      expect(console.error).toHaveBeenCalled();
    });
  });
});
