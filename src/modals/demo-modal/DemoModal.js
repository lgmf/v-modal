export default {
  name: 'demo-modal',
  props: {
    title: { type: String, required: true },
    message: { type: String, required: true }
  },
  data() {
    return {
      identifier: 'demo-modal',
    };
  }
};
