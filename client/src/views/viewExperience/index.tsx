import { useNavigate } from 'react-router-dom';

import Header from 'components/header';

import ButtonGoHome from 'components/buttonGoHome';
import { EActiveView } from 'domains/enums/EActiveView';
import * as S from './styles';

const ViewExperience = () => {
  const navigate = useNavigate();

  const experience = [
    {
      company: 'InnovateTech Solutions',
      position: 'Senior Full-Stack Developer (January 2014 - December 2020)',
      responsibilities:
        'Leadership in ecommerce platform development with React and Node, collaboration with designers on Figma and performance optimization. ',
    },
    {
      company: 'TechVisionary Corp',
      position: 'Systems Analyst (March 2012 - February 2017)',
      responsibilities:
        'Analysis and modernization of legacy systems, migration to modern technologies.',
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <Header activeMenu={EActiveView.experience} />
        <S.ButtonBack>
          <ButtonGoHome />
        </S.ButtonBack>
      </S.Header>
      <S.Body>
        <S.Content>
          <S.Cols>
            <S.MyTitle />
          </S.Cols>
          <S.Cols>
            <S.BaseSVG>
              <S.TitleSVG />
            </S.BaseSVG>
          </S.Cols>
        </S.Content>
        <S.Expirience>
          {experience.map((i, key) => (
            <S.ExpirienceRow key={key}>
              <S.ExpirienceLine>
                <S.ExpirienceLabel>Company</S.ExpirienceLabel>
                <S.ExpirienceTitle>{i.company}</S.ExpirienceTitle>
              </S.ExpirienceLine>

              <S.ExpirienceLine>
                <S.ExpirienceLabel>position</S.ExpirienceLabel>
                <S.ExpiriencePosition>{i.position}</S.ExpiriencePosition>
              </S.ExpirienceLine>

              <S.ExpirienceLine>
                <S.ExpirienceLabel>responsibilities</S.ExpirienceLabel>
                <S.ExpirienceResponsabilities>
                  {i.responsibilities}
                </S.ExpirienceResponsabilities>
              </S.ExpirienceLine>
            </S.ExpirienceRow>
          ))}
        </S.Expirience>
      </S.Body>
    </S.Container>
  );
};

export default ViewExperience;
