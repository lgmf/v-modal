import { actions } from '@storybook/addon-actions';

import ModalDialog from '@/lib/components/v-modal/ModalDialog.vue'

const story = {
  parameters: {
    jest: 'ModalDialog.spec.js',
  },
};

export default {
  title: 'Modal Dialog',
  component: ModalDialog
};

export const basic = () => ({
  components: { ModalDialog },
  data() {
    return {
      identifier: 'my-modal',
      title: 'modal dialog',
      message: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In at est sagittis, venenatis nisi in, fringilla sem.
        Nulla sodales, ipsum sit amet consequat condimentum, mi lectus malesuada metus, vel vehicula orci dui in est.
      `,
    };
  },
  template: `
    <div>
      <modal-dialog :identifier="identifier" autofocus>
        <template #header>
          <h1 class="title">{{ title }}</h1>
        </template>

        <template #body>
          <p class="message">{{ message }}</p>
        </template>

        <template #footer>
          <button @click="handleFinish">finish</button>
        </template>
      </modal-dialog>
    </div>
  `,
  methods: actions('handleFinish'),

});

basic.story = story;
