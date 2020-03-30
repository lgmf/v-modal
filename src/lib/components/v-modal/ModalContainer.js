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
  data() {
    return {
      modal: null,
    }
  },
  computed: {
    showModal() {
      return !!this.modal;
    }
  },
  methods: {
    add(name, props = {}, listeners = {}) {
      this.modal = {
        name,
        props,
        listeners,
      };
    },
    clear() {
      this.modal = null;
      this.$emit('modal-closed');
    }
  },
};
