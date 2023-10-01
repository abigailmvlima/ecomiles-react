import { EActiveView } from 'domains/enums/EActiveView';
import * as S from './styles';
type TProps = {
  active: EActiveView;
};

const Menu = ({ active }: TProps) => {
  return (
    <S.Container>
      <S.Button active={EActiveView.home == active}>Home</S.Button>
      <S.Button active={EActiveView.pacients == active}>Paciente</S.Button>
    </S.Container>
  );
};

export default Menu;
