import { ModalContainer } from '../dist/v-modal.common';

import DemoModal from '@/modals/demo-modal/DemoModal'

export default {
  components: { ModalContainer },
  data() {
    return {
      modal: '',
      modalProps: {},
      showModal: false,
    };
  },
  methods: {
    launchDemoModal() {
      this.modal = DemoModal.name;
      this.modalProps = {
        title: 'demo modal',
        message: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In at est sagittis, venenatis nisi in, fringilla sem.
          Nulla sodales, ipsum sit amet consequat condimentum, mi lectus malesuada metus, vel vehicula orci dui in est.
        `,
      }
      this.showModal = true;
    },
    hideModal() {
      this.modal = '';
      this.modalProps = {};
      this.showModal = false;
    },
  },
}
