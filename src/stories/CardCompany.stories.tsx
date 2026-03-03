import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardCompany } from '../components/CardCompany';

const meta = {
  title: 'Components/CardCompany',
  component: CardCompany,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
  },
} satisfies Meta<typeof CardCompany>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Minha Empresa',
  },
};

export const LongName: Story = {
  args: {
    name: 'Empresa com um nome muito longo para testar o comportamento do componente',
  },
};
