import { EButtonType } from 'domains/enums/EButtons';
import { MouseEventHandler } from 'react';
import * as S from './styles';

type TProps = {
  title: string;
  onClick?: MouseEventHandler | undefined;
  type?: EButtonType;
};

const ButtonGo = ({ title, onClick, type = EButtonType.default }: TProps) => {
  return (
    <S.Container onClick={onClick} type={type}>
      <S.Title type={type}>{title}</S.Title>
    </S.Container>
  );
};

export default ButtonGo;
