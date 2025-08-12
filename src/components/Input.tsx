// Importação para código
import React, { useState } from "react";

// Importação de ícones/Imagens
import {
  EyeClosedIcon,
  EyeIcon,
  WarningCircleIcon,
  XIcon,
} from "@phosphor-icons/react";

// Tipagem do input e todas suas Props
type InputProps = React.ComponentProps<"input"> & {
  children?: React.ReactNode; // Conteúdo de dentro do Input, se houver, como ícones.
  type?: "text" | "password" | "email" | "number" | "tel" | "search"; // Tipo do input, com "text" como padrão.
  label?: string; // Rótulo do input, se necessário.
  hasError?: InputError; // Estado de erro opcional, com mensagem de erro.
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean; // Indica se o input está desabilitado.
  required?: boolean; // Indica se o campo é obrigatório.
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
  value = "",
  onChange,
  required = false,
  disabled = false,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  // Função para mostrar ou esconder a senha, se o tipo for "password".
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-1 items-start w-full">
      <label className="font-bold text-[0.875rem]">
        {label && label}
        <small className="text-red-base text-[0.8rem]">{required && "*"}</small>
      </label>

      <div
        className={`flex items-center gap-2 overflow-hidden px-3 py-2 rounded w-full transition-colors 
          ${
            hasError?.status
              ? "border-red-base ring-2 ring-red-300"
              : "border border-gray-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary"
          }
          ${disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""}
        `}
      >
        {children && children}

        <input
          type={inputType}
          className={`flex-1 min-w-0 outline-none text-[1rem] bg-transparent
            ${disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""}
            [&::-webkit-search-cancel-button]:appearance-none
            [&::-webkit-search-cancel-button]:hidden
          `}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />

        {type === "search" && String(value).length > 0 && (
          <button
            type="button"
            onClick={() => onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)}
            className="text-gray-400 hover:text-gray-600 transition cursor-pointer"
          >
            <XIcon size={18} />
          </button>
        )}

        {type === "password" && (
          <button
            className="cursor-pointer"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowPassword((prev) => !prev);
            }}
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
