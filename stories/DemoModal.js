import ModalDialog from '@/lib/components/v-modal/ModalDialog.vue'

export default {
  name: 'demo-modal',
  components: { ModalDialog },
  props: {
    title: { type: String, required: true },
    message: { type: String, required: true }
  },
  data() {
    return {
      identifier: 'demo-modal',
    };
  },
  template: `
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
  `
}
