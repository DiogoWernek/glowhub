import { useState } from "react";

// Imagens e ícones
import { ListIcon, SignOutIcon, XIcon } from "@phosphor-icons/react";
import Logo from "../assets/icons/glowhub_logo.svg";

// Componentes
import { Button } from "./Button";

// Hooks
import { useIsMobile } from "../hooks/useIsMobile";

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false); // Renderiza no DOM
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Controla animação
  
  const isMobile = useIsMobile(); // Hook para detectar se é mobile
  
  const openMenu = () => {
    setShowMenu(true);
    setTimeout(() => setIsMenuOpen(true), 10); // pequeno delay p/ animação
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => setShowMenu(false), 300); // bate com duration-300
  };

  return (
    <div>
      <header className="bg-background border-b-2 border-border-primary p-4 w-full fixed justify-between items-center flex shadow-lg z-10">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo GlowHub" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-text-primary text-xl font-bold">Glowhub</h1>
            <span className="text-text-secondary text-[0.8rem]">
              Minhas empresas
            </span>
          </div>
        </div>

        {isMobile ? (
          <div className="flex items-center">
            <button className="cursor-pointer" onClick={openMenu}>
              <ListIcon size={24} />
            </button>
          </div>
        ) : (
          <nav className="flex items-center gap-4">
            <a
              href="#"
              className="text-text-primary hover:text-text-secondary transition-colors"
            >
              Métricas
            </a>
            <a
              href="#"
              className="text-text-primary hover:text-text-secondary transition-colors"
            >
              Planos
            </a>
            <Button buttonType={2}>
              Sair
              <SignOutIcon size={20} />
            </Button>
          </nav>
        )}
      </header>

      {showMenu && isMobile && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/50 z-50 transition-opacity duration-300 
            ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMenu} // fecha ao clicar no overlay
        >
          <div
            className={`bg-white w-64 h-full p-4 fixed right-0 flex flex-col justify-between transform transition-transform duration-300 ease-in-out
              ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()} // evita fechar ao clicar dentro
          >
            <button
              className="absolute top-4 right-4 cursor-pointer"
              onClick={closeMenu}
            >
              <XIcon size={24} />
            </button>

            <nav className="flex flex-col gap-4 mt-8">
              <a
                href="#"
                className="text-text-primary hover:text-text-secondary transition-colors"
              >
                Métricas
              </a>
              <a
                href="#"
                className="text-text-primary hover:text-text-secondary transition-colors"
              >
                Planos
              </a>
            </nav>

            <Button gap="gap-1">
              Sair
              <SignOutIcon size={18} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
