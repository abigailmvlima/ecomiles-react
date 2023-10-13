import { useNavigate } from 'react-router-dom';

import Header from 'components/header';

import ButtonGoHome from 'components/buttonGoHome';
import { EActiveView } from 'domains/enums/EActiveView';
import * as S from './styles';

const ViewHobbies = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <Header activeMenu={EActiveView.trainning} />
        <S.ButtonBack>
          <ButtonGoHome />
        </S.ButtonBack>
      </S.Header>
      <S.Body>
        <S.Cols>
          <S.MyTitle />
        </S.Cols>
        <S.Cols>
          <S.BaseSVG>
            <S.TitleSVG />
          </S.BaseSVG>
        </S.Cols>
      </S.Body>
    </S.Container>
  );
};

export default ViewHobbies;
