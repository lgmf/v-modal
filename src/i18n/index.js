import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    demonstration: 'Demonstration',
    language: 'Language',
    message: {
      hello: "hello world"
    }
  },
  ja: {
    demonstration: 'デモンストレーション',
    language: '言語',
    message: {
      hello: "こんにちは、世界"
    }
  }
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "ja", // set locale
  messages // set locale messages
});

export default i18n;
