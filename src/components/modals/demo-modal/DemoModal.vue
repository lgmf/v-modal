<template>
  <modal-dialog class="demo-modal">
    <template #header>
      <h1 class="title m-0">{{ title }}</h1>
    </template>

    <template #body>
      <h6 class="subtitle is-6">{{ message }}</h6>
    </template>

    <template #footer>
      <button class="button is-primary" @click="onFinish()">Finish</button>
    </template>
  </modal-dialog>
</template>

<script>
import ConfirmModal from "../alert/ConfirmModal.vue";

export default {
  name: "demo-modal",
  props: {
    title: { type: String, required: true },
    message: { type: String, required: true },
  },
  methods: {
    onFinish() {
      const confirmModalConfig = {
        propsData: {
          title: "Are you sure?",
          message: "This action can not be undone.",
        },
        on: {
          confirmed: () => {
            this.$emit("finish");
          },
        },
      };
      this.$modal.show(ConfirmModal, confirmModalConfig);
    },
  },
};
</script>
