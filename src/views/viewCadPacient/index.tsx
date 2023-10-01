import { useLocation, useNavigate } from 'react-router-dom';

import Menu from 'components/menu';

import InputDefault from 'components/inputDefault';
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
      <S.Body>
        <S.Content>
          <S.SubTitle>IDENTIFICAÇÃO</S.SubTitle>
          <S.Form>
            <S.Name>
              <InputDefault />
            </S.Name>
            <S.Sexy>
              <InputDefault />
            </S.Sexy>
            <S.CPF>
              <InputDefault />
            </S.CPF>
            <S.Naturalidade>
              <InputDefault />
            </S.Naturalidade>
            <S.DtNascimento>
              <InputDefault />
            </S.DtNascimento>
            <S.StateCivil>
              <InputDefault />
            </S.StateCivil>
            <S.Phone>
              <InputDefault />
            </S.Phone>
            <S.Mail>
              <InputDefault />
            </S.Mail>
          </S.Form>
          <S.SubTitle>ENDEREÇO</S.SubTitle>
          <S.Form>
            <S.CEP>
              <InputDefault />
            </S.CEP>
            <S.Endereco>
              <InputDefault />
            </S.Endereco>
            <S.Numero>
              <InputDefault />
            </S.Numero>
            <S.Complemento>
              <InputDefault />
            </S.Complemento>
            <S.Bairro>
              <InputDefault />
            </S.Bairro>
            <S.Cidade>
              <InputDefault />
            </S.Cidade>
          </S.Form>
        </S.Content>
      </S.Body>
      <S.Footer></S.Footer>
    </S.Container>
  );
};

export default ViewListPacient;
