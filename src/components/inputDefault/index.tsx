import { TOnchangeData } from 'domains/types/TListPacient';
import * as S from './styles';

type TProps = {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (d: TOnchangeData) => void;
};

const InputDefault = ({ label, onChange, value, name }: TProps) => {
  return (
    <S.Container>
      {label && <S.Title>{label}</S.Title>}
      <S.Base>
        <S.Input
          name={name}
          value={value}
          onChange={(d) =>
            onChange &&
            onChange({
              name: name || 'notfound',
              value: d.target.value,
            })
          }
        />
      </S.Base>
    </S.Container>
  );
};

export default InputDefault;
