import { useState } from "react";

// Imagens e ícones
import { PlusIcon } from "@phosphor-icons/react";

// Componentes
import { CardCompany } from "../components/CardCompany";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

// Hooks
import { useIsMobile } from "../hooks/useIsMobile";

export const Companies = () => {
  const [searchCompany, setSearchCompany] = useState<string>(""); // Estado para armazenar a pesquisa

  const isMobile = useIsMobile(); // Hook para detectar se é mobile

  const companies = [
    { id: 1, name: "TechCorp" },
    { id: 2, name: "HealthPlus" },
    { id: 3, name: "EcoEnergy" },
    { id: 4, name: "EduSmart" },
    { id: 5, name: "FinSecure" },
    { id: 6, name: "BuildWell" },
    { id: 7, name: "Foodies" },
    { id: 8, name: "TravelEase" },
    { id: 9, name: "StyleHub" },
    { id: 10, name: "AutoDrive" },
    { id: 11, name: "Glowhub" },
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchCompany.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen items-center gap-6">
      <div className={`w-full max-w-4xl flex flex-col gap-2`}>
        <h1 className="text-2xl font-bold text-text-primary">
          Todas suas empresas
        </h1>

        <div className={`flex gap-2 md:gap-4 ${isMobile && "flex-col"}`}>
          <Input
            placeholder="Pesquisar Empresa"
            value={searchCompany}
            onChange={(e) => setSearchCompany(e.target.value)}
            type="search"
            autoFocus
          />

          <div
            className={`w-full max-w-[100px] md:max-w-[200px] ${
              isMobile && "max-w-full"
            }`}
          >
            <Button buttonType={1}>
              <PlusIcon size={20} />
              Nova Empresa
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl items-center">
        {filteredCompanies.length === 0 ? (
          <div className="col-span-1 md:col-span-2 text-center text-text-secondary">
            Nenhuma empresa encontrada.
          </div>
        ) : (
          filteredCompanies.map((company) => (
            <CardCompany key={company.id} name={company.name} />
          ))
        )}
      </div>
    </div>
  );
};
