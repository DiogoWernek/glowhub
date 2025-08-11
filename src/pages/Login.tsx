import { useState } from "react";

// Importações de imagens e ícones
import {
  EnvelopeIcon,
  EnvelopeSimpleIcon,
  GoogleLogoIcon,
  KeyIcon,
} from "@phosphor-icons/react";
import Logo from "../assets/icons/glowhub_logo.svg";

// Componentes
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recoverEmail, setRecoverEmail] = useState("");
  const [showModalPassword, setShowModalPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-[1rem]">
      {/* Container principal do login */}
      <form className="flex flex-col text-center border-2 border-border-primary rounded-[0.5rem] p-6 py-12 pb-4 bg-white gap-5 shadow-lg w-full max-w-[22rem] items-center">
        <div className="flex flex-col items-center gap-0.5">
          <img src={Logo} alt="Logo GlowHub" className="w-20 mb-2" />
          <h1 className="text-text-primary text-2xl font-bold">Glowhub</h1>

          <p className="text-text-secondary text-[.875rem]">
            Central de serviços estéticos
          </p>
        </div>

        <div className="flex items-center justify-center gap-1 border border-primary rounded-[0.5rem] p-2 cursor-pointer hover:bg-primary active:bg-primary/80 transition-colors group">
          <GoogleLogoIcon
            size={16}
            className="text-primary group-hover:text-white transition-colors"
          />
          <p className="text-[0.75rem] text-primary group-hover:text-white transition-colors">
            Continue com o Google
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Input
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            <EnvelopeSimpleIcon size={18} />
          </Input>
          
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            <KeyIcon size={18} />
          </Input>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Button children="Entrar" />
          <a
            href="/register"
            className="text-primary text-[.875rem] font-bold hover:text-primary/80 active:text-primary/80"
          >
            Criar uma nova conta
          </a>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            setShowModalPassword(true);
          }}
          className="text-text-secondary text-[.875rem] hover:text-text-secondary/80 active:text-text-secondary/80 cursor-pointer"
        >
          Esqueci minha senha
        </button>
      </form>

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

          <Input
            label="E-mail"
            type="email"
            value={recoverEmail}
            onChange={(e) => setRecoverEmail(e.target.value)}
          >
            <EnvelopeIcon size={18} />
          </Input>
          <Button children="Enviar Instruções" />
        </div>
      </Modal>
    </div>
  );
};
