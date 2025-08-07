import { Loading } from "./Loading";

type ButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode; // Conteúdo do botão, como texto ou ícones.
  onClick?: () => void; // Função a ser chamada ao clicar no botão.
  loading?: boolean; // Indica se o botão está em estado de carregamento.
  disabled?: boolean; // Indica se o botão está desabilitado.
};

export const Button = ({
  children,
  onClick,
  loading = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={`flex w-full min-h-[2.8125rem] rounded-[0.5rem] text-center justify-center items-center transition duration-200 
        ${disabled || loading
          ? "bg-gray-300 cursor-not-allowed text-gray-500"
          : "bg-primary hover:bg-primary/90 active:bg-primary/80 cursor-pointer text-white"
        }`}
    >
      {loading ? (
        <Loading color={disabled ? "#999" : "white"} />
      ) : (
        <p className="text-[0.9rem] p-3 font-bold">{children}</p>
      )}
    </button>
  );
};
