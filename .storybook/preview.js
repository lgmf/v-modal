import { addDecorator, addParameters } from '@storybook/vue';
import { withTests } from '@storybook/addon-jest';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import results from '../.jest-test-results.json';

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
