import type { Meta, StoryObj } from '@storybook/vue3';
import { VIcon } from '@/components/Icons';
import { paths } from '@/components/Icons/icons.ts';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Lib/VIcon',
  component: VIcon,
  tags: ['autodocs'],
  argTypes: {
    path: {
      description: 'Key of object paths',
      options: Object.keys(paths),
      defaultValue: 'sun',
      control: 'select',
    },
  },
  args: {},
  decorators: [
    () => ({
      template: '<div style="color: var(--text)"><story/></div>',
    }),
  ],
} satisfies Meta<typeof VIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { path: 'moon' },
};

export const AllIcons: Story = {
  args: { path: 'moon' },
  parameters: {
    paths,
  },
  decorators: [
    (args, { parameters }) => ({
      setup() {
        return { paths: parameters.paths };
      },
      components: { VIcon },
      template: `<div style="color: var(--text); display: flex; gap: 20px; align-items: center">
        <template
          v-for="path in Object.keys(paths)"
          :key="path"
        >
          <div style="display: flex;
                      flex-direction: column;
                      align-items: center;
                      gap: 4px;
                      border: 1px solid var(--border);
                      box-shadow: var(--border-box-shadow);
                      padding: 8px;
                      border-radius: 8px;
                      ">
            <v-icon :path="path" />

            <p>{{path}}</p>
          </div>
        </template>
      </div>`,
    }),
  ],
};
