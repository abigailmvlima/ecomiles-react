import { useLocation, useNavigate } from 'react-router-dom';

import Menu from 'components/menu';

import { EActiveView } from 'domains/enums/EActiveView';
import * as S from './styles';

const ViewListPacient = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  console.log(1111, state);

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          DADOS DE CADASTRO
          <br />
          DO PACIENTE
        </S.Title>
        <Menu active={EActiveView.home} />
      </S.Header>
      <S.Body></S.Body>
      <S.Footer></S.Footer>
    </S.Container>
  );
};

export default ViewListPacient;
