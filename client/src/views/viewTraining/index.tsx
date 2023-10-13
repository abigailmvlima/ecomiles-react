import { useNavigate } from 'react-router-dom';

import Header from 'components/header';

import ButtonGoHome from 'components/buttonGoHome';
import { EActiveView } from 'domains/enums/EActiveView';
import * as S from './styles';

const ViewTraining = () => {
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
        <S.Content>
          <S.CousesBase>
            <S.ContentTitle>linux</S.ContentTitle>
            <S.ContentValue>2022 faculty</S.ContentValue>

            <S.ContentTitle>webdesigner</S.ContentTitle>
            <S.ContentValue>2012 aorus</S.ContentValue>
          </S.CousesBase>
          <S.GraduationBase>Col1</S.GraduationBase>
          <S.LinguagesBase>Col1</S.LinguagesBase>
        </S.Content>
      </S.Body>
    </S.Container>
  );
};

export default ViewTraining;
