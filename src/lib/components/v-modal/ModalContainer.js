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
      modals: [],
    }
  },
  computed: {
    hasModal() {
      return !!this.modals.length;
    },
    top() {
      return this.modals.length - 1;
    },
  },
  methods: {
    push(modal, options) {
      const newModal = {
        Component: modal,
        options: {
          ...defaultModalOptions,
          ...options,
        }
      };
      this.modals.push(newModal);
      return newModal;
    },
    pop() {
      return this.modals.pop();
    },
    async open(modal, options = defaultModalOptions) {
      this.push(modal, options);
      await this.$nextTick();

      const newModalRef = this.$refs.modalComponents[this.top];

      ModalEventBus.$emit(EventsTypes.OPENED, newModalRef);
      newModalRef.$emit(EventsTypes.OPENED, newModalRef);
    },
    async close() {
      await this.$nextTick();

      if (!this.hasModal) {
        return;
      }

      const closedModalRef = this.$refs.modalComponents[this.top];

      ModalEventBus.$emit(EventsTypes.CLOSED, closedModalRef);
      closedModalRef.$emit(EventsTypes.CLOSED, closedModalRef);

      this.pop();
    },
  },
};
