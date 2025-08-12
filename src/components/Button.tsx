import { Loading } from "./Loading";

type ButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode; // Conteúdo do botão, como texto ou ícones.
  onClick?: () => void; // Função a ser chamada ao clicar no botão.
  loading?: boolean; // Indica se o botão está em estado de carregamento.
  disabled?: boolean; // Indica se o botão está desabilitado.
  gap?: string; // Define o espaçamento entre os itens dentro do botão.
  buttonType?: number; // Define o tipo de botão, usado para aplicar estilos diferentes.
};

export const Button = ({
  children,
  onClick,
  loading = false,
  disabled = false,
  gap = "gap-0.5",
  buttonType = 1, // 1: padrão, 2: com borda
  ...rest
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        ${
          buttonType === 1
            ? "flex w-full max-h-[2.875rem] rounded-[0.5rem] text-center justify-center items-center transition duration-200 bg-primary hover:bg-primary/90 active:bg-primary/80 cursor-pointer text-white"
            : ""
        }
        ${
          buttonType === 2
            ? "flex w-full items-center max-h-[2.875rem] justify-center text-center border border-primary rounded-[0.5rem] cursor-pointer hover:bg-primary active:bg-primary/80 transition-colors group"
            : ""
        }
        ${disabled ? "bg-gray-300 cursor-not-allowed text-gray-500" : ""}
        `}
      {...rest}
    >
      <p
        className={`
          ${buttonType === 1 ? "text-[0.875rem]" : ""}
          ${buttonType === 2 ? "text-[0.875rem] text-primary group-hover:text-white transition-colors" : ""}
          p-2.5 font-bold flex ${gap} ${
          loading ? "invisible" : ""
        }`}
      >
        {children}
      </p>

      {/* Loading sobreposto */}
      {loading && (
        <span className="absolute">
          <Loading color={disabled ? "#999" : "white"} />
        </span>
      )}
    </button>
  );
};
