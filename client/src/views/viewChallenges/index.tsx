import svg from 'assets/svg';
import { EActiveView } from 'domains/enums/EActiveView';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const ViewChallenges = () => {
  const navigate = useNavigate();

  const challenges = [
    { title: 'Desafio de Diversidade e Inclusão', endDate: 'Encerra em Julho' },
    { title: 'Desafio de Diversidade e Inclusão', endDate: 'Encerra em Julho' },
    { title: 'Desafio de Diversidade e Inclusão', endDate: 'Encerra em Julho' },
    { title: 'Desafio de Diversidade e Inclusão', endDate: 'Encerra em Julho' },
  ];

  return (
    <S.Container>
      <S.Header>
        <S.ButomLogo>
          <S.Logo
            src={require('../../assets/png/iconEcoMiles.png')}
            alt="Ecomiles Logo"
          />
          <S.ButomBase
            onClick={() => {
              navigate(`/${EActiveView.home}`);
            }}
          >
            <S.ButomImage>
              <svg.Back />
            </S.ButomImage>
            <S.ButomDescription>Voltar</S.ButomDescription>
          </S.ButomBase>
        </S.ButomLogo>
        <S.Profile>
          <S.Greeting>Olá, Abigail</S.Greeting>
          <S.Miles>58.407 milhas</S.Miles>
          <S.Logout
            onClick={() => {
              navigate(`/${EActiveView.login}`);
            }}
          >
            sair
          </S.Logout>
        </S.Profile>
      </S.Header>
      <S.Title>Desafios</S.Title>
      <S.ChallengeList>
        {challenges.map((challenge, index) => (
          <S.ChallengeItem
            key={index}
            onClick={() => {
              navigate(`/${EActiveView.challengeDetails}`, {
                state: challenge,
              });
            }}
          >
            <S.ChallengeDetails>
              <S.ChallengeTitle>{challenge.title}</S.ChallengeTitle>
              <S.ChallengeLink href="#">Saiba mais</S.ChallengeLink>
            </S.ChallengeDetails>
            <S.ChallengeActions>
              <S.ChallengeEnd>{challenge.endDate}</S.ChallengeEnd>
              <S.RegisterButton>Registrar</S.RegisterButton>
            </S.ChallengeActions>
          </S.ChallengeItem>
        ))}
      </S.ChallengeList>
    </S.Container>
  );
};

export default ViewChallenges;
