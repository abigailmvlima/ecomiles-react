import { useNavigate } from 'react-router-dom';

import Header from 'components/header';

import ButtonGoHome from 'components/buttonGoHome';
import { EActiveView } from 'domains/enums/EActiveView';
import * as S from './styles';

const ViewTraining = () => {
  const navigate = useNavigate();

  const courses = [
    {
      label: 'linux',
      text: '2022 facult',
    },
    {
      label: 'webdesigner',
      text: '2012 aorus',
    },
    {
      label: 'photoshop',
      text: '2015 eabics',
    },
    {
      label: 'elustrator',
      text: '2015 semicos',
    },
  ];

  const graduation = [
    {
      label: 'INTERNET SYSTEMS',
      text: '2021 -2023 Faculty FIAP',
    },
  ];

  const linguagens = [
    {
      text: 'ingles',
    },
    {
      text: 'português',
    },
    {
      text: 'espanhol',
    },
  ];

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
          <S.BaseCols>
            <S.ContentTitle>Courses</S.ContentTitle>
            {courses.map((i, key) => (
              <S.ContentBase key={key}>
                <S.ContentSubTitle>{i.label}</S.ContentSubTitle>
                <S.ContentValue>{i.text}</S.ContentValue>
              </S.ContentBase>
            ))}
          </S.BaseCols>

          <S.BaseCols>
            <S.ContentTitle>graduation</S.ContentTitle>
            {graduation.map((i, key) => (
              <S.ContentBase key={key}>
                <S.ContentSubTitle>{i.label}</S.ContentSubTitle>
                <S.ContentValue>{i.text}</S.ContentValue>
              </S.ContentBase>
            ))}
          </S.BaseCols>

          <S.BaseCols>
            <S.ContentTitle>linguagens</S.ContentTitle>
            {linguagens.map((i, key) => (
              <S.ContentBase key={key}>
                <S.ContentValue>{i.text}</S.ContentValue>
              </S.ContentBase>
            ))}
          </S.BaseCols>
        </S.Content>
      </S.Body>
    </S.Container>
  );
};

export default ViewTraining;
