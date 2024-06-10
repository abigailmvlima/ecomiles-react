import { useNavigate } from 'react-router-dom';

import ButtonGo from 'components/buttonGo';
import InputDefault from 'components/inputDefault';
import LinkLabel from 'components/linkLabel';
import { EActiveView } from 'domains/enums/EActiveView';
import { EInputPosition, EInputType } from 'domains/enums/EInput';
import { ILogin } from 'domains/interfaces/login';
import { FormProvider, useForm } from 'react-hook-form';
import serviceAuth from 'services/serviceAuth';
import * as S from './styles';

const ViewLogin = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      mail: 'abigail.lima@gmail.com',
      password: 'Ab@102030',
    },
  });

  return (
    <S.Container>
      <S.Body>
        <S.Icon>
          <S.EcoMilesPlanet />
        </S.Icon>
        <FormProvider {...methods}>
          <S.Form>
            <S.Image>
              <S.IconEcoMiles
                src={require('../../assets/png/iconEcoMiles.png')}
                alt={''}
              />
            </S.Image>
            <S.Input>
              <InputDefault
                position={EInputPosition.center}
                type={EInputType.mail}
                isLowerCase={true}
                name={'mail'}
              />
            </S.Input>
            <S.Input>
              <InputDefault
                position={EInputPosition.center}
                type={EInputType.password}
                isLowerCase={true}
                name={'password'}
              />
            </S.Input>
            <S.Forgot>
              <LinkLabel label={'esqueci minha senha'} />
            </S.Forgot>
            <S.Buttons>
              <S.Button>
                <ButtonGo
                  label={'Entrar'}
                  onClick={async () => {
                    const data: ILogin = await methods.getValues();
                    await serviceAuth.onLogin(data, navigate);
                  }}
                />
              </S.Button>
            </S.Buttons>
            <S.Registers>
              <S.Or>ou</S.Or>
              <S.LinkLabel>
                <LinkLabel
                  label={'Cadastre-se'}
                  onClick={async () => {
                    navigate(`/${EActiveView.register}`);
                  }}
                />
              </S.LinkLabel>
            </S.Registers>
          </S.Form>
        </FormProvider>
      </S.Body>
    </S.Container>
  );
};

export default ViewLogin;
