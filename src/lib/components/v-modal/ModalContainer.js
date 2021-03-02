import { ModalEventBus, EventsTypes } from '../../utils';

const defaultModalOptions = {
  propsData: {},
  on: {}
}

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
      modalOptions: { ...defaultModalOptions },
    }
  },
  computed: {
    showModal() {
      return !!this.modal;
    }
  },
  methods: {
    open(modal, options = defaultModalOptions) {
      this.modal = modal;
      this.modalOptions = {
        ...defaultModalOptions,
        ...options,
      };
    },
    close() {
      ModalEventBus.$emit(EventsTypes.CLOSED, this.modal);
      this.$refs.modalComponent.$emit(EventsTypes.CLOSED, this.modal);
      this.pop();
    },
    pop() {
      this.modal = null;
      this.modalOptions = { ...defaultModalOptions }
    }
  },
  mounted() {
    if (this.$modal) {
      this.$modal._setModalContainerRef(this);
    }
  }
};
