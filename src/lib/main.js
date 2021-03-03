
import ModalPlugin from './ModalPlugin';

import './styles/settings.scss';

const VModal = {
  _installed: false,
  install(Vue, options) {
    if (this._installed) {
      return;
    }

    const modalPlugin = new ModalPlugin(Vue, options);
    Vue.modal = modalPlugin;
    Vue.prototype.$modal = modalPlugin;
    this._installed = true;
  }
}

export default VModal;
