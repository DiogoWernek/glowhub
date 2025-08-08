// Importações de imagens e ícones
import { EnvelopeIcon, KeyIcon, UserIcon } from "@phosphor-icons/react";
import Logo from "../assets/icons/glowhub_logo.svg";

// Componentes
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Modal } from "../components/modal";
import { useState } from "react";

export const Login = () => {
  const [showModalPassword, setShowModalPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-[1rem]">
      {/* Container principal do login */}
      <div className="flex flex-col text-center border-2 border-border-primary rounded-[0.5rem] p-6 py-12 pb-4 bg-white gap-5 shadow-lg w-full max-w-[22rem]">
        <div className="flex flex-col items-center gap-0.5">
          <img src={Logo} alt="Logo GlowHub" className="w-20 mb-2" />
          <h1 className="text-text-primary text-2xl font-bold">Glowhub</h1>

          <p className="text-text-secondary text-[.875rem]">
            Central de serviços estéticos
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Input label="Usuário">
            <UserIcon size={18} />
          </Input>
          <Input
            label="Senha"
            type="password"
          >
            <KeyIcon size={18} />
          </Input>
        </div>

        <div className="flex flex-col gap-4">
          <Button children="Entrar" />
          <a
            href="#"
            className="text-primary text-[.875rem] font-bold hover:text-primary/80 active:text-primary/80"
          >
            Criar uma nova conta
          </a>
        </div>

        <button
          onClick={() => setShowModalPassword(true)}
          className="text-text-secondary text-[.875rem] hover:text-text-secondary/80 active:text-text-secondary/80 cursor-pointer"
        >
          Esqueci minha senha
        </button>
      </div>

      <Modal
        isOpen={showModalPassword}
        onClose={() => {
          setShowModalPassword(false);
        }}
      >
        <div className="flex flex-col text-center gap-4">
          <h2 className="text-text-primary text-xl font-bold">
            Recuperar Senha
          </h2>
          <p className="text-text-secondary text-[.875rem]">
            Insira seu e-mail cadastrado para receber as instruções de
            recuperação de senha.
          </p>
          <Input label="E-mail" type="email">
            <EnvelopeIcon size={18} />
          </Input>
          <Button children="Enviar Instruções" />
        </div>
      </Modal>
    </div>
  );
};
