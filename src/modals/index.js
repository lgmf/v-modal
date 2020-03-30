import Vue from 'vue';
import VModal from '../../dist/v-modal.common';

import DemoModal from './demo-modal/DemoModal.vue';

Vue.use(VModal);

Vue.component(DemoModal.name, DemoModal);
