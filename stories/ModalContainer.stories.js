import { actions } from '@storybook/addon-actions';

import ModalContainer from '@/lib/components/v-modal/ModalContainer.vue'

export default {
  title: 'Modal Container',
  component: ModalContainer
};

const story = {
  parameters: {
    jest: 'ModalContainer.spec.js',
  },
};

export const basic = () => ({
  components: { ModalContainer },
  data() {
    return {
      modal: '',
      modalProps: {},
      showModal: false,
    };
  },
  template: `
    <div>
      <h1>This is the component that will control which modal is opened</h1>
      <p>Its suppose to be instantiated once at root level and just</p>

      <modal-container
        :modal="modal"
        :modalProps="modalProps"
        :showModal="showModal"
        @modal-closed="hideModal($event)"
      ></modal-container>
    </div>
  `,
  methods: actions('onModalClosed'),
});

basic.story = story;
