import { useNavigate } from 'react-router-dom';

import Menu from 'components/menu';

import ButtonGo from 'components/buttonGo';
import InputDefault from 'components/inputDefault';
import ListPacient from 'components/listPacient';
import { EActiveView } from 'domains/enums/EActiveView';
import * as S from './styles';

const ViewListPacient = () => {
  const navigate = useNavigate();

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
          <ListPacient
            data={[
              {
                id: {
                  value: 1,
                },

                name: {
                  title: 'Usuario 01',
                },
                phone: {
                  title: '(11)9-9999-9999',
                },
                mail: {
                  title: 'emaildousuario@dominio.com',
                },
                dateBirth: {
                  title: '10/11/2012',
                },
                city: {
                  title: 'Cidade do Usuario',
                },
                actions: {
                  title: '',
                },
              },

              {
                id: {
                  value: 2,
                },

                name: {
                  title: 'Usuario 02',
                },
                phone: {
                  title: '(11)9-9999-9999',
                },
                mail: {
                  title: 'emaildousuario@dominio.com',
                },
                dateBirth: {
                  title: '10/11/2012',
                },
                city: {
                  title: 'Cidade do Usuario',
                },
                actions: {
                  title: '',
                },
              },

              {
                id: {
                  value: 3,
                },
                name: {
                  title: 'Usuario 03',
                },
                phone: {
                  title: '(11)9-9999-9999',
                },
                mail: {
                  title: 'emaildousuario@dominio.com',
                },
                dateBirth: {
                  title: '10/11/2012',
                },
                city: {
                  title: 'Cidade do Usuario',
                },
                actions: {
                  title: '',
                },
              },
            ]}
          />
        </S.Pacient>
      </S.Body>
      <S.Footer></S.Footer>
    </S.Container>
  );
};

export default ViewListPacient;
