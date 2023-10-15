import { useNavigate } from 'react-router-dom';

import ButtonGo from 'components/buttonGo';
import ButtonGoogle from 'components/buttonGoogle';
import InputDefault from 'components/inputDefault';
import LinkLabel from 'components/linkLabel';
import * as S from './styles';

const ViewLogin = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Body>
        <S.Icon>
          <S.EcoMilesPlanet />
        </S.Icon>
        <S.Form>
          <S.Image>
            <S.IconEcoMiles
              src={require('../../assets/png/iconEcoMiles.png')}
              alt={''}
            />
          </S.Image>
          <S.Input>
            <InputDefault label={'E-mail'} />
          </S.Input>
          <S.Input>
            <InputDefault label={'Senha'} />
          </S.Input>
          <S.Forgot>
            <LinkLabel label={'esqueci minha senha'} />
          </S.Forgot>
          <S.Buttons>
            <S.Button>
              <ButtonGo label={'Entrar'} onClick={() => navigate('/home')} />
            </S.Button>
            <S.Button>
              <ButtonGoogle />
            </S.Button>
          </S.Buttons>
          <S.Registers>
            <S.Or>ou</S.Or>
            <S.LinkLabel>
              <LinkLabel label={'Cadastre-se'} />
            </S.LinkLabel>
          </S.Registers>
        </S.Form>
      </S.Body>
    </S.Container>
  );
};

export default ViewLogin;
