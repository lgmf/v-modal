import ModalContainer from './components/v-modal/ModalContainer.vue';
import ModalDialog from './components/v-modal/ModalDialog.vue';
import './styles/settings.scss';

function createModalContainerWrapper(id) {
  const containerWrapper = document.createElement('div');
  containerWrapper.id = id;
  return containerWrapper;
}

function createModalContainer(Vue) {
  let ref = null;

  const containerWrapper = createModalContainerWrapper('v-modal-wrapper');

  document.body.appendChild(containerWrapper);

  new Vue({
    render: h => {
      ref = h(ModalContainer);
      return ref;
    }
  }).$mount('#v-modal-wrapper');

  return ref.componentInstance;
}

const VModal = {
  install(Vue) {
    if (this.installed) {
      return;
    }

    const containerRef = createModalContainer(Vue);

    this.installed = true;

    Vue.component(ModalDialog.name, ModalDialog);

    Vue.prototype.$modal = {
      show({ identifier, props, listeners }) {
        containerRef.add(identifier, props, listeners);
      },
      hide() {
        containerRef.clear();
      }
    };
  }
}

export default VModal;
