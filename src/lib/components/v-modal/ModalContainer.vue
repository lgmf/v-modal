<template>
  <div class="modal-container">
    <transition name="backdrop-shown">
      <div v-if="showModal" class="backdrop" @click="close()"></div>
    </transition>

    <keep-alive>
      <transition name="modal-shown">
        <component
          ref="modalComponent"
          v-focus
          v-if="showModal"
          v-bind="modalOptions.propsData"
          v-on="modalOptions.on"
          :is="modal"
        ></component>
      </transition>
    </keep-alive>
  </div>
</template>

<script src="./ModalContainer.js"></script>

<style lang="scss" src="./ModalContainer.scss"></style>