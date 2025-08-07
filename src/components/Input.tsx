// Importação para código
import React, { useState } from "react";

// Importação de ícones/Imagens
import {
  EyeClosedIcon,
  EyeIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react";

// Tipagem do input e todas suas Props
type InputProps = React.ComponentProps<"input"> & {
  children?: React.ReactNode; // Conteúdo de dentro do Input, se houver, como ícones.
  type?: "text" | "password" | "email" | "number"; // Tipo do input, com "text" como padrão.
  label?: string; // Rótulo do input, se necessário.
  hasError?: InputError; // Estado de erro opcional, com mensagem de erro.
};

// Tipagem do erro para receber status e mensagem
type InputError = {
  status: boolean; // Indica se há um erro.
  message: string; // Mensagem de erro, se houver.
};

export const Input = ({
  children,
  type = "text",
  label,
  hasError = { status: false, message: "" },
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  // Função para mostrar ou esconder a senha, se o tipo for "password".
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-1 items-start w-full">
      <label className="font-bold text-[0.875rem]">{label && label}</label>

      <div
        className={`flex items-center gap-2 overflow-hidden px-3 py-2 rounded w-full transition-colors 
          ${
            hasError?.status
              ? "border-red-base ring-2 ring-red-300"
              : "border border-gray-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary"
          }
        `}
      >
        {children && children}

        <input
          type={inputType}
          className="flex-1 min-w-0 bg-transparent outline-none"
        />

        {type === "password" && (
          <button
            className="cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword === true ? <EyeIcon /> : <EyeClosedIcon />}
          </button>
        )}
      </div>

      {hasError.status === true ? (
        <div className="flex items-center gap-0.5 justify-center">
          <WarningCircleIcon size={11} color="#FF5252" />
          <small className="text-[11px] text-red-base">
            {hasError.message}
          </small>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
