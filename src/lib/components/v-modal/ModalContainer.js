export const modalContainerSelector = 'modal-container';

export default {
  name: 'modal-container',
  directives: {
    'focus': function focusDirective(el) {
      setTimeout(() => {
        el.focus();
      }, 0);
    },
  },
  props: {
    modal: { type: String },
    modalProps: { type: Object },
    showModal: { type: Boolean, default: false },
  },
  data() {
    return {
      modalListeners: {
        'modal-dialog-closed': this.closeModal,
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit('modal-closed', this.modal);
    },
  },
};
