import { useNavigate } from "react-router";

// Importação de Ícones e Imagens
import { ArrowLeftIcon } from "@phosphor-icons/react";
import logo from "../assets/icons/glowhub_logo.svg"

// Importação de componentes.
import { Button } from "../components/Button";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="flex gap-4 flex-col items-center">
        <img src={logo} alt="Logo do Glowhub" className="w-24" />

        <h1>Página não encontrada. Volte a página anterior</h1>
       
        <div>
          <Button onClick={handleBack}>
            <ArrowLeftIcon />
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
};
