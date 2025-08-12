import Logo from "../assets/icons/glowhub_logo.svg";

export const CardCompany = () => {
  return (
    <div className="flex flex-col p-4 gap-1 bg-white rounded-lg border-2 border-primary-light shadow-md w-full max-w-sm max-h-fit">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-md font-semibold mb-2 text-text-primary">
          Glowhub
        </h1>
        <img src={Logo} alt="Logo da empresa indicada" className="w-10" />
      </div>

      <div>
        <p className="text-text-secondary text-sm">
          Central de serviços estéticos Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Labore qui obcaecati magnam unde exercitationem
        </p>
      </div>

      <div>

      </div>
    </div>
  );
};
