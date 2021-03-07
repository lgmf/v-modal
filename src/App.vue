<template>
  <div id="app" class="container">
    <section class="section">
      <button class="button is-primary is-medium" @click="openDemoModal">
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
          title: this.$t("demonstration"),
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
