import EventBus from './utils/EventBus';

import ModalContainer from './components/v-modal/ModalContainer.vue';
import ModalDialog from './components/v-modal/ModalDialog.vue';

import './styles/settings.scss';

function createModalContainerWrapper(id) {
  const containerWrapper = document.createElement('div');
  containerWrapper.id = id;
  return containerWrapper;
}

function createModalContainer(Vue) {
  const containerWrapper = createModalContainerWrapper('v-modal-wrapper');
  const ModalContainerComponent = Vue.extend(ModalContainer);
  const modalContainerRef = new ModalContainerComponent();

  document.body.appendChild(containerWrapper);
  modalContainerRef.$mount('#v-modal-wrapper');

  return modalContainerRef;
}

const VModal = {
  install(Vue) {
    if (this.installed) {
      return;
    }

    const modalContainerRef = createModalContainer(Vue);

    this.installed = true;

    Vue.component(ModalDialog.name, ModalDialog);

    Vue.prototype.$modal = {
      $on: EventBus.$on.bind(EventBus),
      show({ identifier, props, listeners }) {
        modalContainerRef.add(identifier, props, listeners);
      },
      hide() {
        modalContainerRef.clear();
      }
    };
  }
}

export default VModal;
