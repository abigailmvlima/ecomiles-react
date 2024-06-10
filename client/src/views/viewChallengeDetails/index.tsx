import svg from 'assets/svg';
import { EActiveView } from 'domains/enums/EActiveView';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const ViewChallengeDetails = () => {
  const navigate = useNavigate();

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
              navigate(`/${EActiveView.challenges}`);
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
      <S.Title>Desafio de Diversidade e Inclusão</S.Title>
      <S.Section>
        <S.SectionTitle>Objetivo:</S.SectionTitle>
        <S.SectionContent>
          Promover a interação e o conhecimento mútuo entre colegas,
          incentivando a diversidade e a inclusão no ambiente de trabalho.
        </S.SectionContent>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Descrição:</S.SectionTitle>
        <S.SectionContent>
          Os colaboradores devem se conectar com pelo menos três colegas de
          diferentes departamentos. O objetivo é aprender sobre suas histórias e
          perspectivas.
        </S.SectionContent>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Passos do Desafio:</S.SectionTitle>
        <S.SectionContent>
          1. Identificar três colegas de diferentes departamentos. <br />
          2. Agendar encontros virtuais ou presenciais. <br />
          3. Conversar para conhecer melhor as histórias e perspectivas dos
          colegas. <br />
          4. Registrar cada interação no aplicativo EcoMiles.
        </S.SectionContent>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Como Registrar a Ação:</S.SectionTitle>
        <S.SectionContent>
          1. Acesse o desafio no aplicativo. <br />
          2. Adicione um registro com o nome do colega, data da interação.{' '}
          <br />
          3. Envie o registro para ganhar milhas.
        </S.SectionContent>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Recompensas:</S.SectionTitle>
        <S.SectionContent>
          1ª interação registrada: 10 milhas <br />
          2ª interação registrada: 20 milhas <br />
          3ª interação registrada: 30 milhas
        </S.SectionContent>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Bônus de conclusão:</S.SectionTitle>
        <S.SectionContent>20 milhas adicionais</S.SectionContent>
      </S.Section>
      <S.Section>
        <S.HighlightedText>
          Este desafio promove um ambiente de trabalho mais inclusivo e
          diversificado, onde todos se sentem valorizados e compreendidos.
        </S.HighlightedText>
      </S.Section>
    </S.Container>
  );
};

export default ViewChallengeDetails;
