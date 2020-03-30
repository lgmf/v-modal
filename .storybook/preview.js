import Vue from 'vue';

import { addDecorator, addParameters } from '@storybook/vue';
import { withTests } from '@storybook/addon-jest';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import results from '../.jest-test-results.json';
import VModal from '../dist/v-modal.common';

Vue.use(VModal);

addDecorator(
  withTests({
    results,
  })
);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
