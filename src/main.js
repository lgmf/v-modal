import Vue from 'vue'
import VModal from '../dist/v-modal.common';

import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(VModal);

new Vue({
  render: h => h(App),
}).$mount('#app')
