import { useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean; // indica se o modal está aberto ou fechado
  onClose: () => void; // função chamada para fechar o modal
  children: React.ReactNode; // conteúdo do modal, que pode ser qualquer elemento React
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Adiciona um listener de evento para fechar o modal quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Se o modal não estiver aberto, retorna null para não renderizar nada
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2.5">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg max-w-lg w-full relative p-6 
               max-h-[90vh] overflow-y-auto scrollbar-custom"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};
