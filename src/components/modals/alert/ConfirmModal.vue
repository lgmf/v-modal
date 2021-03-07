<template>
  <modal-dialog class="confirm-modal">
    <template #header>
      <h1 class="title m-0">{{ title }}</h1>
    </template>

    <template #body>
      <h6 class="subtitle is-6">{{ message }}</h6>
    </template>

    <template #footer>
      <div class="field is-grouped">
        <button class="control button" @click="onCancel()">Cancelar</button>
        <button class="control button is-primary" @click="onConfirm()">
          Confirmar
        </button>
      </div>
    </template>
  </modal-dialog>
</template>

<script>
export default {
  name: "confirm-modal",
  props: {
    title: { type: String, required: true },
    message: { type: String, required: true },
  },
  methods: {
    onCancel() {
      this.$emit("canceled");
      this.$modal.hide();
    },
    onConfirm() {
      this.$emit("confirmed");
      this.$modal.hide();
    },
  },
};
</script>
