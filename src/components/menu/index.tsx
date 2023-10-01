import { EActiveView } from 'domains/enums/EActiveView';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
type TProps = {
  active: EActiveView;
};

const Menu = ({ active }: TProps) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Button
        active={EActiveView.home == active}
        onClick={() => navigate('/')}
      >
        Home
      </S.Button>
      <S.Button
        active={EActiveView.pacients == active}
        onClick={() => navigate('/pacientes')}
      >
        Paciente
      </S.Button>
    </S.Container>
  );
};

export default Menu;
