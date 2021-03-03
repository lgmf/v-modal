import { ModalEventBus } from './utils';
import { ModalContainer, ModalDialog } from './components';

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

function registerComponents(Vue) {
  Vue.component(ModalDialog.name, ModalDialog);
}

class ModalPlugin {
  $on = ModalEventBus.$on.bind(ModalEventBus);

  _modalContainerRef = null;

  constructor(Vue, options) {
    this._modalContainerRef = createModalContainer(Vue, options);
    registerComponents(Vue);
  }

  show(modal, options) {
    this._modalContainerRef.open(modal, options);
  }

  hide() {
    this._modalContainerRef.close();
  }
}

export default ModalPlugin;
