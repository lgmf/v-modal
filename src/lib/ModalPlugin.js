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

function removeModalContainer(ref) {
  document.body.removeChild(ref.$el);
  ref.$destroy();
}

class ModalPlugin {
  $on = ModalEventBus.$on.bind(ModalEventBus);

  _modalContainerRef = null;

  constructor(Vue) {
    this._modalContainerRef = createModalContainer(Vue);
    this._registerComponents(Vue);
  }

  show(modal, options) {
    this._modalContainerRef.open(modal, options);
  }

  hide() {
    this._modalContainerRef.close();
  }

  _registerComponents(Vue) {
    Vue.component(ModalDialog.name, ModalDialog);
    Vue.component(ModalContainer.name, ModalContainer);
  }

  _setModalContainerRef(ref) {
    if (this._modalContainerRef) {
      removeModalContainer(this._modalContainerRef);
    }

    this._modalContainerRef = ref;
  }
}

export default ModalPlugin;
