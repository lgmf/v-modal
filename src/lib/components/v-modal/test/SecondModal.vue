<template>
  <modal-dialog class="second-modal">
    <template #header>
      <h1 class="title">{{ title }}</h1>
    </template>

    <template #body>
      <p class="message">{{ message }}</p>
    </template>

    <template #footer>
      <button @click="$modal.hide">finish</button>
    </template>
  </modal-dialog>
</template>

<script lang="js">
import ModalDialog from '../ModalDialog.vue';

export default {
  name: 'second-modal',
  components: {
    ModalDialog,
  },
  props: ['title', 'message'],
};
</script>
