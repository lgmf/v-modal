<template>
  <modal-dialog class="demo-modal">
    <template #header>
      <h1 class="title m-0">{{ title }}</h1>
    </template>

    <template #body>
      <div class="field">
        <label class="label">
          {{ $t("language") }}
        </label>

        <div class="select mb-4">
          <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
              {{ lang }}
            </option>
          </select>
        </div>

        <h6 class="subtitle is-6">{{ $t("message.hello") }}</h6>
      </div>
    </template>

    <template #footer>
      <button class="button is-primary" @click="onFinish()">Finish</button>
    </template>
  </modal-dialog>
</template>

<script>
import ConfirmModal from "../alert/ConfirmModal.vue";

export default {
  name: "demo-modal",
  props: {
    title: { type: String, required: true },
  },
  data() {
    return {
      langs: this.$i18n.availableLocales,
    };
  },
  methods: {
    onFinish() {
      const confirmModalConfig = {
        propsData: {
          title: "Are you sure?",
          message: "This action can not be undone.",
        },
        on: {
          confirmed: () => {
            this.$emit("finish");
          },
        },
      };
      this.$modal.show(ConfirmModal, confirmModalConfig);
    },
  },
};
</script>
