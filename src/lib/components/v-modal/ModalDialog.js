export default {
  name: 'modal-dialog',
  props: {
    withCloseButton: { type: Boolean, default: true }
  },
  methods: {
    close() {
      this.$modal.hide();
    }
  },
};
