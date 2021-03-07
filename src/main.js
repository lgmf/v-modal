import Vue from 'vue'
import VModal from '../dist/v-modal.common';

import i18n from '@/i18n';

import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(VModal, { i18n });

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
