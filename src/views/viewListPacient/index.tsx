import { useNavigate } from 'react-router-dom';

import Logo from 'components/logo';
import Menu from 'components/menu';
import ButtonShortCut from 'components/buttonShortCut';
import { EImages } from 'domains/enums/EImages';
import SocialMedia from 'components/socialMedia';

import * as S from './styles';
import { EActiveView } from 'domains/enums/EActiveView';
import ButtonGo from 'components/buttonGo';
import ListPacient from 'components/listPacient';

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
            <S.Input>inputeste</S.Input>
            <ButtonGo title={'Buscar'} onClick={() => {}} />
          </S.InputBase>
          <ButtonGo title={'NOVO'} onClick={() => {}} />
        </S.Search>
        <S.Pacient>
          <ListPacient
            data={[
              {
                nome: 'Usuario 01',
                phone: '(11)9-9999-9999',
                mail: 'emaildousuario@dominio.com',
                dateBirth: '10/11/2012',
                city: 'Cidade do Usuario',
              },

              {
                nome: 'Usuario 02',
                phone: '(11)9-9999-9999',
                mail: 'emaildousuario@dominio.com',
                dateBirth: '10/11/2012',
                city: 'Cidade do Usuario',
              },

              {
                nome: 'Usuario 03',
                phone: '(11)9-9999-9999',
                mail: 'emaildousuario@dominio.com',
                dateBirth: '10/11/2012',
                city: 'Cidade do Usuario',
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
