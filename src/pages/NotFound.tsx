import { useNavigate } from "react-router";

// Importação de Ícones e Imagens
import { ArrowLeftIcon } from "@phosphor-icons/react";

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
        <h1 className="text-6xl">404</h1>

        <h2>Página não encontrada, Volte a página anterior.</h2>
       
        <div>
          <Button onClick={handleBack}>
            <ArrowLeftIcon size={16} />
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
};
