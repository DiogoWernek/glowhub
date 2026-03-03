import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from '../components/Modal';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'onClose' },
    children: { control: 'text' },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: (
      <div>
        <h2 className="text-xl font-bold mb-4">Título do Modal</h2>
        <p>Este é o conteúdo do modal. Você pode colocar qualquer coisa aqui.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Ação
        </button>
      </div>
    ),
  },
};
