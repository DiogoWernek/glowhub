import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../components/Input';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'email', 'number', 'search'] },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    hasError: { control: 'object' },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Nome',
    placeholder: 'Digite seu nome',
  },
};

export const Password: Story = {
  args: {
    label: 'Senha',
    type: 'password',
    placeholder: 'Digite sua senha',
  },
};

export const WithError: Story = {
  args: {
    label: 'E-mail',
    type: 'email',
    placeholder: 'exemplo@email.com',
    hasError: {
      status: true,
      message: 'E-mail inválido',
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    disabled: true,
    value: 'Valor fixo',
  },
};

export const Search: Story = {
  args: {
    label: 'Pesquisar',
    type: 'search',
    placeholder: 'Buscar...',
  },
};
