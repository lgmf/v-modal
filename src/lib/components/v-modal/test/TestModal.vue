<template>
  <modal-dialog class="test-modal" :identifier="identifier">
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
  components: {
    ModalDialog,
  },
  props: ['title', 'message'],
  data() {
    return {
      identifier: 'test-modal',
    };
  },
};
</script>
