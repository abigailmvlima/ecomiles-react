import { MouseEventHandler } from 'react';
import * as S from './styles';

type TProps = {
  title: string;
  onClick?: MouseEventHandler | undefined;
};

const ButtonGo = ({ title, onClick }: TProps) => {
  return (
    <S.Container onClick={onClick}>
      <S.Titulo>{title}</S.Titulo>
    </S.Container>
  );
};

export default ButtonGo;
