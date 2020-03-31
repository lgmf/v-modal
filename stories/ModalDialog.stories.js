import ModalDialog from '@/lib/components/v-modal/ModalDialog.vue';

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
  template: `
    <h1>This is the component that will render a modal</h1>
  `,
});

basic.story = story;
