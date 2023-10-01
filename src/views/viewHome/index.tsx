import { useNavigate } from 'react-router-dom';

import Logo from 'components/logo';
import Menu from 'components/menu';
import ButtonShortCut from 'components/buttonShortCut';
import { EImages } from 'domains/enums/EImages';
import SocialMedia from 'components/socialMedia';

import * as S from './styles';
import { EActiveView } from 'domains/enums/EActiveView';

const ViewHome = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <S.Logo>
          <Logo />
        </S.Logo>
        <Menu active={EActiveView.home} />
      </S.Header>
      <S.Body>
        <S.Button>
          <ButtonShortCut
            title={`Lista\nPacientes`}
            image={EImages.list}
            onClick={() => navigate('/pacientes')}
          />
        </S.Button>
        <S.Button>
          <ButtonShortCut
            title={`Cadastrar\nPaciente`}
            image={EImages.plus}
            onClick={() => navigate('/cadastro')}
          />
        </S.Button>
      </S.Body>
      <S.Footer>
        <S.FooterContent />
        <SocialMedia />
      </S.Footer>
    </S.Container>
  );
};

export default ViewHome;
