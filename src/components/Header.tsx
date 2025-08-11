// Importações de ícones e imagens.
import Logo from "../assets/icons/glowhub_logo.svg";

export const Header = () => {
  return (
    <div>
      <header className="bg-background border-b-2 border-border-primary p-4 w-full fixed">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo GlowHub" className="w-10 h-10" />
          
          <div className="flex flex-col">
            <h1 className="text-text-primary text-xl font-bold">
              Glowhub
            </h1>
            <span className="text-text-secondary text-[0.8rem]">Minhas empresas</span>
          </div>
        </div>
      </header>
    </div>
  );
};
