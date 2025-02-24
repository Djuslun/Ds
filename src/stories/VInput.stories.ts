import type { Meta, StoryObj } from '@storybook/vue3';

import VInput from '@/components/Inputs/VInput.vue';
import { InputTypes } from '@/components';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Lib/VInput',
  component: VInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: Object.values(InputTypes),
      defaultValue: InputTypes.Text,
      control: 'select',
    },
  },
  args: {},
} satisfies Meta<typeof VInput>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: { type: InputTypes.Text },
};
