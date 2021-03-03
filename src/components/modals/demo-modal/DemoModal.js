export default {
  name: 'demo-modal',
  props: {
    title: { type: String, required: true },
    message: { type: String, required: true }
  },
  methods: {
    onFinish() {
      this.$emit('finish');
    }
  }
};
