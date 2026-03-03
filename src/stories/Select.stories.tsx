import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from '../components/Select';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    hasError: { control: 'object' },
    options: { control: 'object' },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'option1', label: 'Opção 1' },
  { value: 'option2', label: 'Opção 2' },
  { value: 'option3', label: 'Opção 3' },
];

export const Default: Story = {
  args: {
    label: 'Selecione uma opção',
    options: options,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Opção Selecionada',
    options: options,
    value: 'option2',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Desabilitado',
    options: options,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Com erro',
    options: options,
    hasError: {
      status: true,
      message: 'Selecione uma opção válida',
    },
  },
};
