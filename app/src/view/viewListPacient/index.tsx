import { ContextNavigation } from "@context/contextNavigation";
import { useContext, useEffect, useState } from "react";
import * as S from "./styles";

import { IconLogoTopWhite } from "@assets/svg";
import { ListPatient } from "@components/listPatient";
import { Menu } from "@components/menu";
import Title from "@components/title";
import { TFHIRPacient } from "@domain/types/TFHIR";
import { TListPacient } from "@domain/types/TListPacient";
import { TNavigation } from "@domain/types/TNavigation";
import { ETitleSize } from "@domain/types/TStyles";
import { findPatient } from "../../../api";

const ViewListPacient = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const [pacients, setPacients] = useState<TListPacient[]>([]);

  const loadData = async () => {
    const listPacients: any = await findPatient();
    console.log(123, listPacients);
    if (listPacients.err) {
      return;
    }

    const temp = listPacients.map((p: TFHIRPacient) => ({
      id: {
        value: p.id,
      },
      name: {
        title: p.name,
      },
      phone: {
        title: p.phone,
      },
      mail: {
        title: p.email,
      },
      birthDate: {
        title: p.birthDate,
      },
      city: {
        title: p?.address?.city,
      },
      actions: {
        title: p?.address?.address || "",
      },
      data: p,
    }));

    setPacients(temp || []);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <S.Container>
      <S.Contents>
        <S.Logo>
          <IconLogoTopWhite />
        </S.Logo>
        <S.Title>
          <Title label="Ola, Dr Marcio Alvarenga" size={ETitleSize.s4} />
          <Title
            label="São Paulo, 12 de Janeiro de 2023"
            size={ETitleSize.s2}
          />
        </S.Title>
        <S.Patient>
          <ListPatient data={pacients || []} />
        </S.Patient>
      </S.Contents>
      <S.Footer>
        <Menu />
      </S.Footer>
    </S.Container>
  );
};

export default ViewListPacient;
