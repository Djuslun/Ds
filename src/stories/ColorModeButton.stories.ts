import type { Meta, StoryObj } from '@storybook/vue3';

import { ColorModeButton } from '@/components/Buttons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Lib/ColorModeButton',
  component: ColorModeButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ColorModeButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {},
};
