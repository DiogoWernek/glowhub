import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/Button';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    buttonType: { control: { type: 'select', options: [1, 2] } },
    gap: { control: 'text' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    buttonType: 1,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    buttonType: 2,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
  },
};

export const CustomGap: Story = {
  args: {
    children: <><span>Icon</span><span>Text</span></>,
    gap: 'gap-4',
  },
};
