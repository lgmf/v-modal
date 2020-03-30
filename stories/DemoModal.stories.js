import Vue from 'vue';

import DemoModal from './DemoModal';

Vue.component(DemoModal.name, DemoModal);

export default {
  title: 'Demo Modal',
  component: DemoModal
};

export const demo = () => ({
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
  methods: {
    launchDemoModal() {
      const modalConfig = {
        identifier: DemoModal.name,
        props: {
          title: 'demo modal',
          message: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In at est sagittis, venenatis nisi in, fringilla sem.
            `,
        }
      }

      this.$modal.show(modalConfig);
    },
  },
  template: `
    <div class="story-container">
      <div class="launcher">
        <button @click="launchDemoModal">
          launch demo modal
        </button>
      </div>
    </div>
  `,
});
