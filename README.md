# V-Modal Plugin

### A simple modal plugin for Vue.js

# How to use

## Install the v-modal plugin

```sh
  npm install @lgmf/v-modal
```

## Creating your first modal

Create a file `MyFirstModal.vue` at `src/modals/my-first-modal/MyFirstModal.vue` and paste the content below

```html
<template>
  <modal-dialog :identifier="identifier">
    <template #header>
      <h1 class="title">{{ title }}</h1>
    </template>

    <template #body>
      <p class="message">{{ message }}</p>
    </template>

    <template #footer>
      <button @click="$modal.hide">finish</button>
    </template>
  </modal-dialog>
</template>

<script lang="js">
export default {
  name: 'my-first-modal',
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

> Modals are simply a wrapper component to v-modal's ModalDialog

## Creating the modals module

Create a file `index.js` at `src/modals` and paste the content below

```js
src/modals/index.js

import Vue from 'vue';
import VModal from '@lgmf/v-modal';

import MyFirstModal from './my-first-modal/MyFirstModal.vue';

Vue.use(VModal);
Vue.component(MyFirstModal.name, MyFirstModal);
```

## Registering the modals module into your app

Inside `src/main.js` add the line below

```js
import './modals'
```

## Testing yout first modal

Inside `src/App.vue` add a button that when clicked calls the `openMyFirstModal` methods

```html
<template>
  <div id="app">
    ...
    <button @click="openMyFirstModal">launch my first modal</button>
    ...
  </div>
</template>

<script lang="js">
import MyFirstModal from '@/modals/my-first-modal/MyFirstModal.vue'

export default {

  methods: {
    openMyFirstModal() {
      const modalConfig = {
        identifier: MyFirstModal.name,
        props: {
          title: 'my first modal',
          message: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In at est sagittis, venenatis nisi in, fringilla sem.
          `,
        }
      }

      this.$modal.show(modalConfig);
    },
    ...
  }
}
</script>
```

> At this point you should be able to see your first modal.

# Development

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