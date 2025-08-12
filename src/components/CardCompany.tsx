// Imagens e ícones
import {
  ArrowRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import Logo from "../assets/icons/glowhub_logo.svg";

// Componentes
import { Button } from "./Button";

type testeProps = {
  name: string;
}

export const CardCompany = ({ name }: testeProps) => {  


  return (
    <div className="flex flex-col p-4 gap-1 bg-white rounded-lg border-2 border-primary-light shadow-md w-full max-h-fit hover:shadow-lg hover:scale-[1.01] transition">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-md font-semibold mb-2 text-text-primary">
          {name}
        </h1>
        <img src={Logo} alt="Logo da empresa indicada" className="w-10" />
      </div>

      <div>
        <p className="text-text-secondary text-sm line-clamp-3">
          Central de serviços estéticos Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Labore qui obcaecati magnam unde exercitationema wdawawawdawaw dawdawwd
        </p>
      </div>

      <div className="flex justify-between items-end">
        <div className="mt-2 flex flex-col gap-1">
          <div className=" flex items-center gap-1">
            <MapPinIcon color="#6a737d" size={16} />
            <p className="text-text-tertiary text-[0.7rem] font-medium">Av. Principal 2</p>
          </div>
          <div className=" flex items-center gap-1">
            <PhoneIcon color="#6a737d" size={16} />
            <p className="text-text-tertiary text-[0.7rem] font-medium">(15) 99767-6890</p>
          </div>
          <div className=" flex items-center gap-1">
            <EnvelopeIcon color="#6a737d" size={16} />
            <p className="text-text-tertiary text-[0.7rem] font-medium">glow@glowhub.com.br</p>
          </div>
        </div>
        <div className="max-w-50%">
          <Button>
            Gerenciar
            <ArrowRightIcon size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};
