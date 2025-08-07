import { PuffLoader } from "react-spinners";

type LoadingProps = {
  color?: string; // Cor do carregamento, padrão é #8e6bd6
};

export const Loading = ({ color = "#8e6bd6" }: LoadingProps) => {
  return <PuffLoader color={color} loading={true} size={24} />;
};
