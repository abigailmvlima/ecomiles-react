import { ContextNavigation } from "@context/contextNavigation";
import { useContext, useEffect, useState } from "react";
import * as S from "./styles";

import { LogoTop } from "@assets/svg";
import { InputForm } from "@components/inputForm";
import { Menu } from "@components/menu";
import SelectPicker from "@components/selectPicker";
import Title from "@components/title";
import { EInputType } from "@domain/enum/EInputType";
import { TFHIRPacient } from "@domain/types/TFHIR";
import { ETitleSize } from "@domain/types/TStyles";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation } from "react-router-native";

type TPacientLocal = {
  id?: string | number;
  name: string;
  phone: string;
  email: string;
  birthDate: string;
  maritalStatus: {
    code: string;
    display: string;
  };
  city?: string;
  document?: string;
  gender?: string;
};

const ViewCadPacient = () => {
  const { route } = useContext(ContextNavigation);
  const location = useLocation();
  const state: any = location?.state;
  const { control } = useForm();
  const sendProps = { control };

  const [defaultValues, setDefaultValues] = useState<TPacientLocal>();

  const methods = useForm({});

  useEffect(() => {
    const data: TFHIRPacient = state?.data || {};
    methods.setValue("name", data.name);
    methods.setValue("document", data.document || "");
    methods.setValue("phone", data.phone || "");
    methods.setValue("birthDate", data.birthDate || "");
    methods.setValue("email", data.email || "");
    methods.setValue("maritalStatus", data.maritalStatus);
    methods.setValue("city", data.address?.city || "");
  }, []);

  const options = [
    {
      code: 1,
      display: "Option 1",
    },
    {
      code: 2,
      display: "Option 2",
    },
    {
      code: 3,
      display: "Option 3",
    },
  ];

  return (
    <S.Container>
      <S.Contents>
        <S.Logo>
          <LogoTop />
        </S.Logo>
        <S.Title>
          <Title label="Ola, Dr Marcio Alvarenga" size={ETitleSize.s4} />
          <Title
            label="São Paulo, 12 de Janeiro de 2023"
            size={ETitleSize.s2}
          />
          <FormProvider {...methods}>
            <InputForm
              label={"Nome"}
              type={EInputType.name}
              name={"name"}
              {...sendProps}
            />
            <InputForm
              label={"document"}
              type={EInputType.cpf}
              name={"document"}
              {...sendProps}
            />
            <InputForm
              label={"Telefone"}
              type={EInputType.phone}
              name={"phone"}
              {...sendProps}
            />
            <InputForm
              label={"Dt.Nascimento"}
              type={EInputType.birthDate}
              name={"birthDate"}
              {...sendProps}
            />
            <InputForm
              label={"Cidade"}
              type={EInputType.text}
              name={"city"}
              {...sendProps}
            />
            <SelectPicker
              options={options}
              label={"Estado Cívil"}
              type={EInputType.maritalStatus}
              name={"maritalStatus"}
              {...sendProps}
            />
          </FormProvider>
        </S.Title>
      </S.Contents>
      <S.Footer>
        <Menu />
      </S.Footer>
    </S.Container>
  );
};

export default ViewCadPacient;
