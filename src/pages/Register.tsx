import { useState } from "react";

// Imagens e ícones
import { EnvelopeSimpleIcon, IdentificationCardIcon, LockIcon, PhoneIcon, UserIcon } from "@phosphor-icons/react";

// Componentes
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { formatCellphone, formatCPF } from "../utils/Formatters";

export const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [cpf, setCpf] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-[1rem]">
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
            asterisk
          >
            <UserIcon size={18} />
          </Input>

          <Input
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            asterisk
          >
            <EnvelopeSimpleIcon size={18} />
          </Input>

          <Input
            label="Telefone"
            type="tel"
            value={formatCellphone(phoneNumber)}
            onChange={(e) => setPhoneNumber(e.target.value)}
            asterisk
          >
            <PhoneIcon size={18} />
          </Input>

          <Input
            label="CPF"
            value={formatCPF(cpf)}
            onChange={(e) => setCpf(e.target.value)}
            asterisk
          >
            <IdentificationCardIcon size={18} />
          </Input>

          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            asterisk
          >
            <LockIcon size={18} />
          </Input>

          <Input
            label="Confirmar senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            asterisk
          >
            <LockIcon size={18} />
          </Input>
        </div>

        <div className="flex flex-col gap-1.5">
          <Button>Cadastrar</Button>
          <a
            href="/"
            className="text-primary text-[.875rem] font-bold hover:text-primary/80 active:text-primary/80"
          >
            Voltar ao login
          </a>
        </div>

      </form>
    </div>
  );
};
