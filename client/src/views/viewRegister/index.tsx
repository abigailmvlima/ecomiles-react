import { useNavigate } from 'react-router-dom';

import ButtonGo from 'components/buttonGo';
import InputDefault from 'components/inputDefault';
import { EActiveView } from 'domains/enums/EActiveView';
import { EInputPosition, EInputType } from 'domains/enums/EInput';
import { IRegister } from 'domains/interfaces/register';
import { FormProvider, useForm } from 'react-hook-form';
import serviceAuth from 'services/serviceAuth';
import * as S from './styles';

const ViewRegister = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      name: 'Abigail Lima',
      mail: 'abigail.lima@gmail.com',
      password: 'Ab@102030',
      passwordConf: 'Ab@102030',
    },
  });

  return (
    <S.Container>
      <S.Body>
        <S.Icon>
          <S.EcoMilesPlanet />
        </S.Icon>
        <S.Form>
          <FormProvider {...methods}>
            <S.ImageBase>
              <S.Image>
                <S.IconEcoMiles
                  src={require('../../assets/png/iconEcoMiles.png')}
                  alt={''}
                  width={'100%'}
                />
              </S.Image>
            </S.ImageBase>
            <S.Input>
              <InputDefault
                label={'Nome'}
                position={EInputPosition.right}
                type={EInputType.text}
                isLowerCase={true}
                name={'name'}
              />
            </S.Input>
            <S.Input>
              <InputDefault
                label={'Email'}
                position={EInputPosition.right}
                type={EInputType.mail}
                isLowerCase={true}
                name={'mail'}
              />
            </S.Input>
            <S.Input>
              <InputDefault
                label={'Senha'}
                position={EInputPosition.right}
                type={EInputType.password}
                isLowerCase={true}
                name={'password'}
                placeholder={''}
              />
            </S.Input>
            <S.Input>
              <InputDefault
                label={'Confirmar senha'}
                position={EInputPosition.right}
                type={EInputType.password}
                isLowerCase={true}
                name={'passwordConf'}
                placeholder={''}
              />
            </S.Input>
            <S.Buttons>
              <S.Button>
                <ButtonGo
                  label={'Salvar'}
                  onClick={async () => {
                    const data: IRegister = await methods.getValues();
                    await serviceAuth.onRegister(data, navigate);
                  }}
                />
              </S.Button>
            </S.Buttons>
            <S.Registers>
              <S.Button>
                <ButtonGo
                  type={3}
                  label={'Cancelar'}
                  onClick={async () => {
                    navigate(`/${EActiveView.login}`);
                  }}
                />
              </S.Button>
            </S.Registers>
          </FormProvider>
        </S.Form>
      </S.Body>
    </S.Container>
  );
};

export default ViewRegister;
