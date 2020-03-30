# V-Modal

## Project setup
```
npm install
```

## Serving the test app to validate the lib
```
npm run serve
```

## Compiles and minifies the library
```
npm run build:lib
```

## How to use

### Install the v-modal

```sh
  npm install @lgmf/v-modal
```

### Import, register and instantiate the ModalContainer component on your App Component

```html
App.vue

<template>
  <div id="app">
    ...
    <modal-container
      :modal="modal"
      :modalProps="modalProps"
      :showModal="showModal"
      @modal-closed="hideModal()"
    ></modal-container>
  </div>
</template>

<script lang="js">
import { ModalContainer } from '@lgmf/v-modal';

export default {
  components: {
    ...
    ModalContainer,
  },
  data() {
    return {
      ...
      modal: '',
      modalProps: {},
      showModal: false,
    };
  },
  methods: {
    hideModal() {
      this.modal = '';
      this.modalProps = {};
      this.showModal = false;
    }
  }
}
</script>
```

### Creating your first modal

#### Create an index.js inside `src/modals` in order to register all modals globally

```js
src/modals/index.js

import Vue from 'vue';

import MyFirstModal from './my-first-modal/MyFirstModal.vue';

Vue.component(MyFirstModal.name, MyFirstModal);
```

#### Register your modals module on your `main.js`

```js
main.js

import Vue from 'vue';

...

import './modals'
```

#### Create the `MyFirstModal` component by using the `ModalDialog` component

```html
src/modals/MyFirstModal.vue

<template>
  <modal-dialog :identifier="identifier">
    <template #header>
      <h1 class="title">{{ title }}</h1>
    </template>

    <template #body>
      <p class="message">{{ message }}</p>
    </template>

    <template #footer>
      <button @click="$parent.closeModal">finish</button>
    </template>
  </modal-dialog>
</template>

<script lang="js">
import { ModalDialog } from '@lgmf/v-modal';

export default {
  name: 'my-first-modal',
  components: { ModalDialog },
  props: {
    title: { type: String, required: true },
    message: { type: String, required: true }
  },
  data() {
    return {
      identifier: 'my-first-modal',
    };
  },
};
</script>
```

#### Finally on your `App` component

```html
App.vue

<template>
  <div id="app">
    ...
    <button @click="openMyFirstModal">launch my first modal</button>
    ...
  </div>
</template>

<script lang="js">
import { ModalContainer } from '@lgmf/v-modal';

export default {
  components: {
    ...
    ModalContainer,
  },
  data() {
    return {
      ...
      modal: '',
      modalProps: {},
      showModal: false,
    };
  },
  methods: {
    openMyFirstModal() {
      // this must be set to the name of your modal component
      this.modal = 'my-first-modal';
      // this props must be the FirstModal component props
      this.modalProps = {
        title: 'my first modal',
        message: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In at est sagittis, venenatis nisi in, fringilla sem.
          Nulla sodales, ipsum sit amet consequat condimentum, mi lectus malesuada metus, vel vehicula orci dui in est.
        `,
      }
      this.showModal = true;
    }
    ...
  }
}
</script>
```