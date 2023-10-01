import svg from 'assets/svg';
import * as S from './styles';
import { EImages } from 'domains/enums/EImages';
import { MouseEventHandler } from 'react';

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
