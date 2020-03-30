<template>
  <div id="app">
    <h1>Demo Modal</h1>

    <button @click="launchDemoModal">launch demo modal</button>

    <modal-container
      :modal="modal"
      :modalProps="modalProps"
      :showModal="showModal"
      @modal-closed="hideModal"
    ></modal-container>
  </div>
</template>

<script src="./App.js"></script>
