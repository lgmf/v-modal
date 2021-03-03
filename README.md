# V-Modal Plugin

### A simple modal plugin for Vue.js

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

## Instantiate v-modal's ModalContainer component in your App.vue

```html
<template>
  <div id="app">
    ...
    <modal-container />
  </div>
</template>
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