import { ModalDialog } from '../../../dist/v-modal.common';

export default {
  name: 'demo-modal',
  components: { ModalDialog },
  props: {
    title: { type: String, required: true },
    message: { type: String, required: true }
  },
  data() {
    return {
      identifier: 'demo-modal',
    };
  },
};