import svg from 'assets/svg';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const ButtonGoHome = () => {
  const navigate = useNavigate();

  return (
    <S.Container
      onClick={() => {
        navigate('/');
      }}
    >
      <S.Icon>
        <svg.ChevronRight />
      </S.Icon>
      <S.Title>Home</S.Title>
    </S.Container>
  );
};

export default ButtonGoHome;
