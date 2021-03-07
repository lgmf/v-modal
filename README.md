# V-Modal Plugin

A simple Vue.js plugin to handle modal dialogs. Check out some use cases below:

- [Stacking modals](https://codesandbox.io/s/lgmfv-modal-stack-ob9f1)
- [Using with other plugins](https://codesandbox.io/s/lgmfv-modal-with-i18n-88xgd)
- [Using outside vue components](https://codesandbox.io/s/lgmfv-modal-outside-component-s6nus)

# How to use

## Install the v-modal package

```sh
  npm install @lgmf/v-modal
```

## Use the v-modal plugin in your Vue app

```js
import Vue from 'vue';
import VModal from '@lgmf/v-modal';

Vue.use(VModal);
...
```

If you are using other plugins like i18n, router, store, etc you must pass them as the options parameter
just like with your App instance

```js
import Vue from 'vue';
import VModal from '@lgmf/v-modal';

import i18n from './i18n';
import router from './router';
import store from './store';

import App from './App.vue';

Vue.use(VModal, { i18n, router, store });

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
```

## Creating your first modal

Create a component named, for example, `MyFirstModal.vue` and paste the content below

```html
<template>
  <modal-dialog>
    <template #header>
      <h1 class="title">{{ title }}</h1>
    </template>

    <template #body>
      <p class="message">{{ message }}</p>
    </template>

    <template #footer>
      <button @click="onFinish()">
        Finish
      </button>
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
  methods: {
    onFinish() {
      this.$modal.hide();
    }
  }
};
</script>
```
> Modals are simply a wrapper component to v-modal's ModalDialog

## Testing yout first modal

Inside `src/App.vue` add a button that when clicked calls the `openMyFirstModal` method

```html
<template>
  <div id="app">
    ...
    <button @click="openMyFirstModal">launch my first modal</button>
    ...
  </div>
</template>

<script lang="js">
import MyFirstModal from 'path/to/MyFirstModal.vue'

export default {
  methods: {
    ...
    openMyFirstModal() {
      const options = {
        propsData: {
          title: 'my first modal',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        on: {
          // Default Event emitted by every modal
          closed: (modal) => {
            console.log(`The modal has been closed. This event can also be handled by the $modal.$on`, modal);
          },
        }
      }

      this.$modal.show(MyFirstModal, options);
    },
  }
}
</script>
```

> Thats all! At this point you should be able to see your first modal.

## Using outside a component

VModal injects the same class into Vue.modal property

```js
import Vue from 'vue';
import Alert from 'path/to/Alert.vue'

function handleSomeError(error) {
  const options = {
    propsData: {
      type: 'error',
      message: error.message
    },
  };

  Vue.modal.show(Alert, options);
}

```

# Contributing

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
