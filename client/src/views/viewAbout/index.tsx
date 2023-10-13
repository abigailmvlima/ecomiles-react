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
          <S.MapBase></S.MapBase>
        </S.Cols>
        <S.Cols>
          <S.BaseTitle>
            <S.MyTitle />
            <S.Description>
              I m 27 years old and I m an enthusiastic software developer,
              single and student. My passion is creating innovative and
              effective solutions through programming. With a solid technical
              foundation, I am recognized for my ability to collaborate
              harmoniously in diverse teams, contributing to the success of
              innovative projects. Additionally, I am extroverted and love
              interacting with teammates and project partners.
            </S.Description>
            <S.BaseIcon>
              <S.Icon>
                <S.IconTitle>PHONE</S.IconTitle>
                <S.IconValue>00 41 1 617 3523467</S.IconValue>
              </S.Icon>

              <S.Icon>
                <S.IconTitle>PHONE</S.IconTitle>
                <S.IconValue>00 41 1 617 3523467</S.IconValue>
              </S.Icon>
            </S.BaseIcon>
          </S.BaseTitle>
        </S.Cols>
      </S.Body>
    </S.Container>
  );
};

export default ViewAbout;
