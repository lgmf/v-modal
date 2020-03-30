export const ModalDialogKeyboardControls = {
  ESCAPE: 'Escape',
};

export default {
  name: 'modal-dialog',
  props: {
    identifier: { type: String, required: true },
  },
  methods: {
    onKeyUp(event) {
      switch (event.key) {
        case ModalDialogKeyboardControls.ESCAPE:
          this.closeSelf();
          break;
        default:
      }
    },
    closeSelf() {
      this.$emit('modal-dialog-closed', this.identifier);
      this.$parent.$emit('modal-dialog-closed', this.identifier);
    },
  },
};
