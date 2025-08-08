import { useState } from "react";

// Imagens e ícones
import { EnvelopeSimpleIcon, IdentificationCardIcon, LockIcon, UserIcon } from "@phosphor-icons/react";

// Componentes
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-[1rem]">
      <form className="flex flex-col text-center border-2 border-border-primary rounded-[0.5rem] p-6 py-12 bg-white gap-5 shadow-lg w-full max-w-[22rem]">
        <div className="flex flex-col items-center gap-0.5">
          <h1 className="text-text-primary text-2xl font-bold">Cadastro</h1>

          <p className="text-text-secondary text-[.875rem]">
            Preencha os campos e realize seu cadastro.
          </p>
        </div>

         <div className="flex flex-col gap-4">
          <Input 
            label="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            <UserIcon size={18} />
          </Input>

          <Input
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            <EnvelopeSimpleIcon size={18} />
          </Input>

          <Input
            label="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          >
            <IdentificationCardIcon size={18} />
          </Input>

          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            <LockIcon size={18} />
          </Input>

          <Input
            label="Confirmar senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          >
            <LockIcon size={18} />
          </Input>
        </div>

        <div>
          <Button>Cadastrar</Button>
        </div>

      </form>
    </div>
  );
};
