import { EyeClosedIcon, EyeIcon } from "@phosphor-icons/react";
import React, { useState } from "react";

type InputProps = React.ComponentProps<"input"> & {
  children?: React.ReactNode; // Conteúdo de dentro do Input, se houver, como ícones.
  type?: "text" | "password" | "email" | "number"; // Tipo do input, com "text" como padrão.
  label?: string; // Rótulo do input, se necessário.
}

export const Input = ({ children, type = "text", label }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  // Função para mostrar ou esconder a senha, se o tipo for "password".
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-1 items-start w-full">
      <label className="font-bold text-[0.875rem]">{label && label}</label>

      <div className="flex items-center gap-2 border overflow-hidden border-gray-300 px-3 py-2 rounded w-full transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary">
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
    </div>
  );
};
