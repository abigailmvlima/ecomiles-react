import { TOnchangeData } from 'domains/types/TListPacient';
import * as S from './styles';

type TProps = {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (d: TOnchangeData) => void;
};

const InputDefault = ({ label, onChange, value, name }: TProps) => {
  // Função para formatar o CPF
  const formatCPFAuto = (tempValue: string) => {
    let cpf = tempValue.replace(/\D/g, ''); // Remove caracteres não numéricos
    cpf = cpf.slice(0, 11); // Limita o CPF aos primeiros 11 dígitos

    // Aplica a máscara de CPF (###.###.###-##)
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    return cpf; // Atualiza o valor do campo de entrada
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const formattedValue = name === 'document' ? formatCPFAuto(value) : value;

    if (onChange) {
      onChange({
        name: name || 'notfound',
        value: formattedValue,
      });
    }
  };

  return (
    <S.Container>
      {label && <S.Title>{label}</S.Title>}
      <S.Base>
        <S.Input name={name} value={value} onChange={handleChange} />
      </S.Base>
    </S.Container>
  );
};

export default InputDefault;
