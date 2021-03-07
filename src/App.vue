<template>
  <div id="app" class="container">
    <section class="section">
      <button class="button is-primary is-large" @click="openDemoModal">
        Open demo modal
      </button>
    </section>
  </div>
</template>

<script>
import { DemoModal } from "@/components/modals";

export default {
  name: "demo-app",
  methods: {
    openDemoModal() {
      const options = {
        propsData: {
          title: "Demo Modal",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra neque id arcu hendrerit consequat. Aliquam sodales viverra ullamcorper. Morbi arcu sapien, mattis suscipit velit eu, suscipit rhoncus lectus. Donec nec sagittis diam. Etiam eu finibus nunc. Duis metus turpis, vulputate nec sapien vel, faucibus imperdiet elit. Aenean dictum scelerisque eros, ut fringilla turpis lobortis non. Quisque mauris dui, suscipit sit amet massa consequat, posuere convallis arcu. Fusce eu condimentum elit.",
        },
        on: {
          // Default Event emitted by every modal
          closed: (modal) => {
            console.log(
              `The modal has been closed. This event can also be handled by the $modal.$on`,
              modal
            );
          },
          // Custom event emitted by the DemoModal
          finish: () => {
            console.log("finish button clicked");
            this.$modal.hide();
          },
        },
      };

      this.$modal.show(DemoModal, options);
    },
  },
};
</script>
