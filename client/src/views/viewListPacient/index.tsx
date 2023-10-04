import { useNavigate } from 'react-router-dom';

import Menu from 'components/menu';

import { findPatient } from 'api';
import ButtonGo from 'components/buttonGo';
import InputDefault from 'components/inputDefault';
import ListPacient from 'components/listPacient';
import { EActiveView } from 'domains/enums/EActiveView';
import { TFHIRPacient } from 'domains/types/TFHIR';
import { TListPacient } from 'domains/types/TListPacient';
import { useEffect, useState } from 'react';
import * as S from './styles';

const ViewListPacient = () => {
  const navigate = useNavigate();
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
        title: p?.address?.address || '',
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
      <S.Header>
        <S.Title>
          LISTAGEM DE
          <br />
          PACIENTES
        </S.Title>
        <Menu active={EActiveView.home} />
      </S.Header>
      <S.Body>
        <S.Search>
          <S.InputBase>
            <S.Input>
              <InputDefault label={'Filtro'} />
            </S.Input>
            <S.InputButton>
              <ButtonGo title={'Buscar'} onClick={() => {}} />
            </S.InputButton>
          </S.InputBase>
          <ButtonGo title={'NOVO'} onClick={() => {}} />
        </S.Search>
        <S.Pacient>
          <ListPacient data={pacients || []} />
        </S.Pacient>
      </S.Body>
      <S.Footer></S.Footer>
    </S.Container>
  );
};

export default ViewListPacient;
