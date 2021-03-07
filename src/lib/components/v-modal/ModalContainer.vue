<template>
  <div class="modal-container">
    <transition name="backdrop-shown">
      <div v-if="hasModal" class="backdrop" @click="close()"></div>
    </transition>

    <keep-alive>
      <transition-group name="modal-shown">
        <component
          ref="modalComponents"
          v-focus
          v-for="(modal, index) in modals"
          v-show="index === top"
          v-bind="modal.options.propsData"
          v-on="modal.options.on"
          :key="index"
          :is="modal.Component"
        ></component>
      </transition-group>
    </keep-alive>
  </div>
</template>

<script src="./ModalContainer.js"></script>

<style lang="scss" src="./ModalContainer.scss"></style>