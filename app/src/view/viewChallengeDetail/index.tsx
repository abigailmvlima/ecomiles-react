import { useContext } from "react";

import * as S from "./styles";

import svg from "@assets/svg";
import { Menu } from "@components/menu";
import { TextDisplay } from "@components/textDisplay";
import { ContextNavigation } from "@context/contextNavigation";
import { ContextTheme } from "@context/contextTheme";
import { ETextDisplayType } from "@domain/enum/ETextDisplay";
import { IContextTheme } from "@domain/interfaces/IContextTheme";
import { TNavigation } from "@domain/types/TNavigation";

const ViewChallengeDetail = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  return (
    <S.Container themeSelected={theme}>
      <S.Header>
        <S.HeaderLogo>
          <svg.LogoHorizontal />
        </S.HeaderLogo>
        <S.BoxUser>
          <S.BoxUserUserName themeSelected={theme}>
            Olá, Abigail
          </S.BoxUserUserName>
          <S.BoxUserUserPoint themeSelected={theme}>
            10.250 milhas
          </S.BoxUserUserPoint>
        </S.BoxUser>
      </S.Header>
      <S.Content themeSelected={theme}>
        <S.PresentationTitle>
          <TextDisplay
            theme={theme}
            type={ETextDisplayType.title}
            label={"Desafio de Diversidade e Inclusão"}
          />
        </S.PresentationTitle>
        <S.PresentationText>
          <TextDisplay
            theme={theme}
            type={ETextDisplayType.titleObs}
            label={
              "Objetivo: Promover a interação e o conhecimento mútuo entre colegas, incentivando a diversidade e a inclusão no ambiente de trabalho."
            }
          />
        </S.PresentationText>

        {/* <S.BoxSelectType>
          <S.BoxSelectTypeItem>
            <S.BoxSelectTypeItemTitle>Desafios</S.BoxSelectTypeItemTitle>
            <Image source={ImgChallenge} style={{ width: 140, height: 140 }} />
          </S.BoxSelectTypeItem>
          <S.BoxSelectTypeItem>
            <TouchableOpacity>
              <S.BoxSelectTypeItemTitle>Recompensa</S.BoxSelectTypeItemTitle>
              <Image source={ImgReward} style={{ width: 140, height: 140 }} />
            </TouchableOpacity>
          </S.BoxSelectTypeItem>
        </S.BoxSelectType> */}

        <S.PresentationText>
          <TextDisplay
            theme={theme}
            type={ETextDisplayType.titleObs}
            label={`Descrição: Os colaboradores devem se conectar com pelo menos três colegas de diferentes departamentos. O objetivo é aprender sobre suas histórias e perspectivas.`}
          />
        </S.PresentationText>
        <S.PresentationText>
          <TextDisplay
            theme={theme}
            type={ETextDisplayType.titleObs}
            label={`
            Passos do Desafio:
            1. Identificar três colegas de diferentes  departamentos.
            2. Agendar encontros virtuais ou presenciais.
            3. Conversar para conhecer melhor as histórias e perspectivas dos colegas.
            4. Registrar cada interação no aplicativo "EcoMiles".
            `}
          />
        </S.PresentationText>
        <S.PresentationText>
          <TextDisplay
            theme={theme}
            type={ETextDisplayType.titleObs}
            label={`
            Como Registrar a Ação:
            1. Acesse o desafio no aplicativo.
            2. Adicione um registro com o nome do colega, data da interação.
            3. Envie o registro para ganhar 'milhas'.
            `}
          />
        </S.PresentationText>
        <S.PresentationText>
          <TextDisplay
            theme={theme}
            type={ETextDisplayType.titleObs}
            label={`
            Recompensas:
  1ª interação registrada: 10 milhas
  2ª interação registrada: 20 milhas
  3ª interação registrada: 30 milhas
            `}
          />
        </S.PresentationText>
        <S.PresentationText>
          <TextDisplay
            theme={theme}
            type={ETextDisplayType.titleObs}
            label={`
            Bônus de conclusão: 20 milhas adicionais
            Este desafio promove um ambiente de trabalho mais inclusivo e diversificado, onde todos se sentem valorizados e compreendidos.
            `}
          />
        </S.PresentationText>
      </S.Content>
      <S.Footer>
        <Menu />
      </S.Footer>
    </S.Container>
  );
};

export default ViewChallengeDetail;
