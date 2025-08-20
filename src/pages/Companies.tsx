import { useEffect, useState } from "react";

// Imagens e ícones
import { PlusIcon } from "@phosphor-icons/react";

// Componentes
import { CardCompany } from "../components/CardCompany";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { Select } from "../components/Select";

// Hooks
import { useIsMobile } from "../hooks/useIsMobile";

// Utils
import { formatCellphone, formatCEP } from "../utils/Formatters";

// Libs
import { toast } from "react-toastify";

export const Companies = () => {
  const [searchCompany, setSearchCompany] = useState<string>(""); // Estado para armazenar a pesquisa

  // Conteúdo do modal
  const [showModal, setShowModal] = useState<boolean>(false); // Estado para controlar a exibição do modal
  const [companyName, setCompanyName] = useState<string>(""); // Estado para armazenar o nome da empresa
  const [description, setDescription] = useState<string>(""); // Estado para armazenar a descrição da empresa
  const [cep, setCep] = useState<string>(""); // Estado para armazenar o CEP da empresa
  const [cepError, setCepError] = useState<AppError>({status: false , message: ""}); // Estado para armazenar o erro do CEP
  const [street, setStreet] = useState<string>(""); // Estado para armazenar a rua da empresa
  const [number, setNumber] = useState<string>(""); // Estado para armazenar o número da empresa
  const [complement, setComplement] = useState<string>(""); // Estado para armazenar o complemento da empresa
  const [city, setCity] = useState<string>(""); // Estado para armazenar a cidade da empresa
  const [state, setState] = useState<string>(""); // Estado para armazenar o estado da empresa
  const [neighborhood, setNeighborhood] = useState<string>(""); // Estado para armazenar o bairro da empresa
  const [phone, setPhone] = useState<string>(""); // Estado para armazenar
  const [site, setSite] = useState<string>(""); // Estado para armazenar o site da empresa
  const [companyEmail, setCompanyEmail] = useState<string>(""); // Estado para armazenar o email da empresa

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

  const estadosBrasil = [
    { id: 1, label: "AC" },
    { id: 2, label: "AL" },
    { id: 3, label: "AP" },
    { id: 4, label: "AM" },
    { id: 5, label: "BA" },
    { id: 6, label: "CE" },
    { id: 7, label: "DF" },
    { id: 8, label: "ES" },
    { id: 9, label: "GO" },
    { id: 10, label: "MA" },
    { id: 11, label: "MT" },
    { id: 12, label: "MS" },
    { id: 13, label: "MG" },
    { id: 14, label: "PA" },
    { id: 15, label: "PB" },
    { id: 16, label: "PR" },
    { id: 17, label: "PE" },
    { id: 18, label: "PI" },
    { id: 19, label: "RJ" },
    { id: 20, label: "RN" },
    { id: 21, label: "RS" },
    { id: 22, label: "RO" },
    { id: 23, label: "RR" },
    { id: 24, label: "SC" },
    { id: 25, label: "SP" },
    { id: 26, label: "SE" },
    { id: 27, label: "TO" },
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchCompany.toLowerCase())
  );

  const searchCep = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error("Erro ao buscar CEP");
      }
      const data = await response.json();
      if (data.erro) {
        throw new Error("CEP não encontrado");
      }
      setStreet(data.logradouro || "");
      setNeighborhood(data.bairro || "");
      setCity(data.localidade || "");
      setState(data.uf || "");
    }
    catch (error) {
      console.error("Erro ao buscar CEP:", error);
      toast.error("CEP inválido ou não encontrado.");
      setCepError({status: true , message: "CEP inválido ou não encontrado."}); 
    }
  }

  useEffect(() => {
    if (cep.length === 9) {
      searchCep(cep);
    }
  }, [cep]);

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
            <Button buttonType={1} onClick={() => setShowModal(true)}>
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

      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <div className="flex flex-col text-center gap-4">
            <h1 className="text-text-primary text-xl font-bold">
              Cadastre sua empresa
            </h1>
            <Input
              label="Nome da empresa"
              placeholder="Digite o nome da empresa"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />

            <Input
              label="Descrição"
              placeholder="Digite uma breve descrição"
              type="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <Input
              label="CEP"
              placeholder="Digite o CEP da empresa"
              value={formatCEP(cep)}
              onChange={(e) => {setCep(e.target.value); setCepError({status: false , message: ""})}}
              hasError={cepError}
              maxLength={9}
              required
            />

            <Input
              label="Rua"
              placeholder="Digite o nome da rua"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
            />

            <Input
              label="Número"
              placeholder="Digite o número da empresa"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />

            <Input
              label="Complemento"
              placeholder="Digite o complemento (opcional)"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
            />

            <Input
              label="Bairro"
              placeholder="Digite o bairro da empresa"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              required
            />
            <Input
              label="Cidade"
              placeholder="Digite a cidade da empresa"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />

            <Select
              label="Estado"
              value={state}
              onChange={(e) => setState(e.target.value)}
              options={estadosBrasil.map((estado) => ({
                value: estado.label,
                label: estado.label,
              }))}
              required
            />

            <Input
              label="Telefone"
              placeholder="Digite o telefone da empresa"
              value={formatCellphone(phone)}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              required
            />

            <Input
              label="Email Empresarial"
              placeholder="Digite o email da empresa"
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
              type="email"
            />

            <Input
              label="Site"
              placeholder="Digite o site da empresa (opcional)"
              value={site}
              onChange={(e) => setSite(e.target.value)}
            />
          
            <Button buttonType={1} onClick={() => setShowModal(false)}>
              Criar Empresa
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};
