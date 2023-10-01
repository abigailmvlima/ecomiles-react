import * as S from './styles';

type TProps = {
  label?: string;
};

const InputDefault = ({ label }: TProps) => {
  return (
    <S.Container>
      {label && <S.Title>{label}</S.Title>}
      <S.Base>
        <S.Input />
      </S.Base>
    </S.Container>
  );
};

export default InputDefault;
