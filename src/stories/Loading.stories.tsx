import type { Meta, StoryObj } from '@storybook/react-vite';
import { Loading } from '../components/Loading';

const meta = {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: '#8e6bd6',
  },
};

export const CustomColor: Story = {
  args: {
    color: '#ff0000',
  },
};
