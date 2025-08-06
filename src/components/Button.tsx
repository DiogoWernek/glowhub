type ButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode; // Conteúdo do botão, se houver.
  onClick?: () => void; // Função a ser chamada ao clicar no botão.
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="w-full bg-primary hover:bg-primary/90 active:bg-primary/80 transition duration-200 rounded-[0.5rem] cursor-pointer" onClick={onClick}>
      <p className="text-white text-[0.9rem] p-3 font-bold">{children}</p>
    </button>
  );
}