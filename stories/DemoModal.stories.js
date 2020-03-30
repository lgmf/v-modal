import Vue from 'vue';

import { ModalContainer } from '@/lib/components/v-modal/ModalContainer.vue';

import DemoModal from './DemoModal';

Vue.component('demo-modal', DemoModal);

export default {
  title: 'Demo Modal',
  component: DemoModal
};

export const demo = () => ({
  components: {
    ModalContainer,
  },
  data() {
    return {
      modal: 'demo-modal',
      modalProps: {
        title: 'demo modal',
        message: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In at est sagittis, venenatis nisi in, fringilla sem.
          Nulla sodales, ipsum sit amet consequat condimentum, mi lectus malesuada metus, vel vehicula orci dui in est.
        `,
      },
      showModal: false,
    };
  },
  template: `
    <div class="story-container">
      <div class="launcher">
        <button @click="openModal">
          launch demo modal
        </button>
      </div>

      <modal-container
        :modal="modal"
        :modalProps="modalProps"
        :showModal="showModal"
        @modal-closed="hideModal($event)"></modal-container>
    </div>
  `,
  methods: {
    openModal() {
      this.showModal = true;
    },
    hideModal(hiddenModal) {
      if (hiddenModal === 'demo-modal') {
        this.showModal = false;
      }
    },
  },
});
