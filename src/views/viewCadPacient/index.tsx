import { useLocation, useNavigate } from 'react-router-dom';

import Menu from 'components/menu';

import ButtonGo from 'components/buttonGo';
import InputDefault from 'components/inputDefault';
import { EActiveView } from 'domains/enums/EActiveView';
import { EButtonType } from 'domains/enums/EButtons';
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
            <S.FormRow>
              <S.Name>
                <InputDefault label={'Nome'} />
              </S.Name>
              <S.Sexy>
                <InputDefault label={'Sexo'} />
              </S.Sexy>
            </S.FormRow>
            <S.FormRow>
              <S.CPF>
                <InputDefault label={'CPF'} />
              </S.CPF>
              <S.Naturalidade>
                <InputDefault label={'Naturalidade'} />
              </S.Naturalidade>
              <S.StateCivil>
                <InputDefault label={'Estado Civil'} />
              </S.StateCivil>
              <S.DtNascimento>
                <InputDefault label={'Dt.Nascimento'} />
              </S.DtNascimento>
            </S.FormRow>
            <S.FormRow>
              <S.Phone>
                <InputDefault label={'Celular'} />
              </S.Phone>
              <S.Mail>
                <InputDefault label={'E-Mail'} />
              </S.Mail>
            </S.FormRow>
          </S.Form>
          <S.SubTitle>ENDEREÇO</S.SubTitle>
          <S.Form>
            <S.FormRow>
              <S.CEP>
                <InputDefault label={'CEP'} />
              </S.CEP>
              <S.Endereco>
                <InputDefault label={'Endereco'} />
              </S.Endereco>
              <S.Numero>
                <InputDefault label={'Numero'} />
              </S.Numero>
            </S.FormRow>
            <S.FormRow>
              <S.Complemento>
                <InputDefault label={'Complemento'} />
              </S.Complemento>
              <S.Bairro>
                <InputDefault label={'Bairro'} />
              </S.Bairro>
              <S.Cidade>
                <InputDefault label={'Cidade'} />
              </S.Cidade>
            </S.FormRow>
          </S.Form>
          <S.FooterButton>
            <S.FooterLeft>
              <ButtonGo
                title={'APAGAR'}
                onClick={() => {}}
                type={EButtonType.remove}
              />
            </S.FooterLeft>
            <S.FooterRight>
              <ButtonGo
                title={'CANCELAR'}
                onClick={() => {}}
                type={EButtonType.cancel}
              />
              <ButtonGo
                title={'SALVAR'}
                onClick={() => {}}
                type={EButtonType.save}
              />
            </S.FooterRight>
          </S.FooterButton>
        </S.Content>
      </S.Body>
    </S.Container>
  );
};

export default ViewListPacient;
