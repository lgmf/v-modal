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
    push(modal, options) {
      this.modal = modal;
      this.modalOptions = {
        ...defaultModalOptions,
        ...options,
      };
    },
    pop() {
      this.modal = null;
      this.modalOptions = { ...defaultModalOptions }
    },
    async open(modal, options = defaultModalOptions) {
      this.push(modal, options);
      await this.$nextTick();
      ModalEventBus.$emit(EventsTypes.OPENED, this.$refs.modalComponent);
      this.$refs.modalComponent.$emit(EventsTypes.OPENED, this.$refs.modalComponent);
    },
    close() {
      ModalEventBus.$emit(EventsTypes.CLOSED, this.$refs.modalComponent);
      this.$refs.modalComponent.$emit(EventsTypes.CLOSED, this.$refs.modalComponent);
      this.pop();
    },
  },
};
