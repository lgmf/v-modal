import { DemoModal } from '@/components/modals';

export default {
  name: 'demo-app',
  methods: {
    openDemoModal() {
      const options = {
        propsData: {
          title: 'Demo Modal',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        on: {
          // Default Event emitted by every modal
          closed: (modal) => {
            console.log(`The modal "${modal.name}" has been closed. This event can also be handled by the $modal.$on`);
          },
          // Custom event emitted by the DemoModal
          finish: () => {
            console.log('finish button clicked');
            this.$modal.hide()
          },
        }
      };

      this.$modal.show(DemoModal, options);
    },
  },
}
