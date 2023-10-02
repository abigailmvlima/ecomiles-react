import { useLocation, useNavigate } from 'react-router-dom';

import Menu from 'components/menu';

import ButtonGo from 'components/buttonGo';
import InputDefault from 'components/inputDefault';
import { EActiveView } from 'domains/enums/EActiveView';
import { EButtonType } from 'domains/enums/EButtons';
import { TFHIRPacient } from 'domains/types/TFHIR';
import { TOnchangeData } from 'domains/types/TListPacient';
import { useEffect, useState } from 'react';
import * as S from './styles';

const ViewListPacient = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const [data, setData] = useState<TFHIRPacient | any>();

  useEffect(() => {
    const pacient: TFHIRPacient = state?.pacient?.data;
    setData(pacient);
  }, [state]);

  const onChange = ({ name, value }: TOnchangeData) => {
    const temp: TFHIRPacient = {
      ...(data ? data : {}),
      [name]: value,
    };
    setData(temp);
  };
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
                <InputDefault
                  label={'Nome'}
                  name={'name'}
                  value={data?.name}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.Name>
              <S.Sexy>
                <InputDefault
                  label={'Sexo'}
                  name={'sex'}
                  value={data?.sex}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.Sexy>
            </S.FormRow>
            <S.FormRow>
              <S.CPF>
                <InputDefault
                  label={'CPF'}
                  name={'document'}
                  value={data?.document}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.CPF>
              <S.Naturalidade>
                <InputDefault
                  label={'Naturalidade'}
                  name={'naturalness'}
                  value={data?.naturalness}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.Naturalidade>
              <S.StateCivil>
                <InputDefault
                  label={'Estado Civil'}
                  name={'maritalstatus'}
                  value={data?.maritalstatus}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.StateCivil>
              <S.DtNascimento>
                <InputDefault
                  label={'Dt.Nascimento'}
                  name={'dateOfbirth'}
                  value={data?.dateOfbirth}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.DtNascimento>
            </S.FormRow>
            <S.FormRow>
              <S.Phone>
                <InputDefault
                  label={'Celular'}
                  name={'sex'}
                  value={data?.sex}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.Phone>
              <S.Mail>
                <InputDefault
                  label={'E-Mail'}
                  name={'mail'}
                  value={data?.mail}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.Mail>
            </S.FormRow>
          </S.Form>
          <S.SubTitle>ENDEREÇO</S.SubTitle>
          <S.Form>
            <S.FormRow>
              <S.CEP>
                <InputDefault
                  label={'CEP'}
                  name={'postcode'}
                  value={data?.address?.postcode}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.CEP>
              <S.Endereco>
                <InputDefault
                  label={'Endereco'}
                  name={'address'}
                  value={data?.address?.address}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.Endereco>
              <S.Numero>
                <InputDefault
                  label={'Numero'}
                  name={'number'}
                  value={data?.address?.number}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.Numero>
            </S.FormRow>
            <S.FormRow>
              <S.Complemento>
                <InputDefault
                  label={'Complemento'}
                  name={'complement'}
                  value={data?.address?.complement}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.Complemento>
              <S.Bairro>
                <InputDefault
                  label={'Bairro'}
                  name={'neighborhood'}
                  value={data?.address?.neighborhood}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.Bairro>
              <S.Cidade>
                <InputDefault
                  label={'Cidade'}
                  name={'city'}
                  value={data?.address?.city}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
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
