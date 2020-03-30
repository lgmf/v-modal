<template>
  <div class="modal-container">
    <transition name="backdrop-shown">
      <div v-if="showModal" class="backdrop" @click="closeModal(modal)"></div>
    </transition>

    <keep-alive>
      <transition name="modal-shown">
        <component v-if="showModal" :is="modal" v-bind="modalProps" v-on="modalListeners" v-focus></component>
      </transition>
    </keep-alive>
  </div>
</template>

<script src="./ModalContainer.js"></script>

<style lang="scss" src="./ModalContainer.scss"></style>