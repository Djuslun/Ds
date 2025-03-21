import { type Preview } from '@storybook/vue3';
import '../src/assets/scss/index.scss';
import { changeMode } from '../src/components/Buttons/ColorModeButton/useColorMode';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [{ name: 'Dark', value: 'var(--bg-main)' }],
      default: 'Dark',
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'sun',
        items: ['Light', 'Dark'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'Dark',
  },
  decorators: [
    (story, context) => {
      const selectedTheme = context.globals.theme.toLowerCase() || 'light';

      changeMode(selectedTheme);

      return { template: '<story/>' };
    },
  ],
};

export default preview;
