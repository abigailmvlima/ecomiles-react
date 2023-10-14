import { useNavigate } from 'react-router-dom';

import Header from 'components/header';

import ButtonGoHome from 'components/buttonGoHome';
import { EActiveView } from 'domains/enums/EActiveView';
import * as S from './styles';

const ViewHobbies = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: 'FAMILY COOKING',
      text: 'My son and I love to cook. This moment not only teaches cooking skills, but its also the opportunity I have to share stories, try new flavors, and create memories together.',
    },
    {
      title: 'BOARD GAMES',
      text: 'I love board games. It is a time of much fun and relaxation among friends and family.',
    },
    {
      title: 'PRACTICE SPORTS',
      text: 'I like to do weight training in the gym and swimming',
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <Header activeMenu={EActiveView.hobbies} />
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
      <S.Content>
        {data.map((i, key) => (
          <S.ContentBase key={key}>
            <S.ContentTitle>{i.title}</S.ContentTitle>
            <S.ContentText>{i.text}</S.ContentText>
          </S.ContentBase>
        ))}
      </S.Content>
    </S.Container>
  );
};

export default ViewHobbies;
