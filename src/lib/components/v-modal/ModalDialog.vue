<template>
  <div
    class="modal-dialog"
    role="dialog"
    tabindex="0"
    :data-modal="identifier"
    @keyup.esc="close()"
  >
    <header class="header">
      <!-- @slot modal header components -->
      <slot name="header"></slot>

      <button
        class="close"
        aria-label="close"
        v-if="withCloseButton"
        @click="close()"
      >
        &#10005;
      </button>
    </header>

    <main class="body" v-if="$slots.body">
      <!-- @slot modal body components -->
      <slot name="body"></slot>
    </main>

    <footer class="footer" v-if="$slots.footer">
      <!-- @slot modal footer components -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script src="./ModalDialog.js"></script>

<style lang="scss" src="./ModalDialog.scss"></style>
