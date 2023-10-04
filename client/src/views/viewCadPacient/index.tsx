import { useLocation, useNavigate } from 'react-router-dom';

import Menu from 'components/menu';

import { deletePatient, updatePatient } from 'api';
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
    console.log(pacient);
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
                  name={'gender'}
                  value={data?.gender}
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

              <S.StateCivil>
                <InputDefault
                  label={'Estado Civil'}
                  name={'maritalStatus'}
                  value={data?.maritalStatus?.code}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.StateCivil>
              <S.DtNascimento>
                <InputDefault
                  label={'Dt.Nascimento'}
                  name={'birthDate'}
                  value={data?.birthDate}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.DtNascimento>
              <S.Phone>
                <InputDefault
                  label={'Celular'}
                  name={'phone'}
                  value={data?.phone}
                  onChange={(d: TOnchangeData) => onChange(d)}
                />
              </S.Phone>
            </S.FormRow>
            <S.FormRow>
              <S.Mail>
                <InputDefault
                  label={'E-Mail'}
                  name={'email'}
                  value={data?.email}
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
                  onChange={(d: TOnchangeData) => {
                    const temp: TFHIRPacient = {
                      ...(data ? data : {}),
                      address: {
                        ...(data.address ? data.address : {}),
                        address: d.value,
                      },
                    };
                    setData(temp);
                  }}
                />
              </S.Endereco>
              <S.Numero>
                <InputDefault
                  label={'Numero'}
                  name={'number'}
                  value={data?.address?.number}
                  onChange={(d: TOnchangeData) => {
                    const temp: TFHIRPacient = {
                      ...(data ? data : {}),
                      address: {
                        ...(data.address ? data.address : {}),
                        number: d.value,
                      },
                    };
                    setData(temp);
                  }}
                />
              </S.Numero>
            </S.FormRow>
            <S.FormRow>
              <S.Bairro>
                <InputDefault
                  label={'Bairro'}
                  name={'neighborhood'}
                  value={data?.address?.neighborhood}
                  onChange={(d: TOnchangeData) => {
                    const temp: TFHIRPacient = {
                      ...(data ? data : {}),
                      address: {
                        ...(data.address ? data.address : {}),
                        neighborhood: d.value,
                      },
                    };
                    setData(temp);
                  }}
                />
              </S.Bairro>
              <S.Cidade>
                <InputDefault
                  label={'Cidade'}
                  name={'city'}
                  value={data?.address?.city}
                  onChange={(d: TOnchangeData) => {
                    const temp: TFHIRPacient = {
                      ...(data ? data : {}),
                      address: {
                        ...(data.address ? data.address : {}),
                        city: d.value,
                      },
                    };
                    setData(temp);
                  }}
                />
              </S.Cidade>
            </S.FormRow>
          </S.Form>
          <S.FooterButton>
            <S.FooterLeft>
              <ButtonGo
                title={'APAGAR'}
                onClick={async () => {
                  const response = await deletePatient(data.id);
                  if (!response.err) {
                    navigate('/pacientes');
                  }
                }}
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
                onClick={async () => {
                  if (data?.id && data?.id.length > 0) {
                    const response = await updatePatient(data);
                  }
                }}
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
