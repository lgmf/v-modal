<template>
  <modal-dialog class="demo-modal" :identifier="identifier">
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

<script src="./DemoModal.js"></script>
