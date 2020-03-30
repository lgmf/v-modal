import DemoModal from '@/modals/demo-modal/DemoModal'

export default {
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
}
