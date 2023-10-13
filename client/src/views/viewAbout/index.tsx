import { useNavigate } from 'react-router-dom';

import Header from 'components/header';

import ButtonGoHome from 'components/buttonGoHome';
import { EActiveView } from 'domains/enums/EActiveView';
import * as S from './styles';

const ViewAbout = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <Header activeMenu={EActiveView.about} />
        <S.ButtonBack>
          <ButtonGoHome />
        </S.ButtonBack>
      </S.Header>
      <S.Body>
        <S.Cols>
          <S.MeAbout />
        </S.Cols>
        <S.Cols>
          <S.BaseTitle>
            <S.MyTitle />
          </S.BaseTitle>
        </S.Cols>
      </S.Body>
    </S.Container>
  );
};

export default ViewAbout;
