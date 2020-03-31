# V-Modal Plugin

### A simple modal plugin for Vue.js

# How to use

## Install the v-modal plugin

```sh
  npm install @lgmf/v-modal
```

## Creating your first modal

> Modals are simply a wrapper component to v-modal's ModalDialog

Create a component named, for example, `MyFirstModal.vue` and paste the content below

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

Register your modal globally

```js
  import Vue from 'vue'
  import MyFirstModal from 'path/to/MyFirstModal.vue'

  Vue.component(MyFirstModal.name, MyFirstModal)
```

## Registering the v-modal plugin into your app

```js
import Vue from 'vue';
import VModal from '@lgmf/v-modal';

Vue.use(VModal);
...
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
import MyFirstModal from 'path/to/MyFirstModal.vue'

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