import { ETheme } from "@domain/enum/ETheme";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as S from "./styles";

export interface IChallengeCard {
  theme: ETheme;
  onPress?: () => void;
  title: string;
  link: string;
}
const ChallengeCard: React.FC<IChallengeCard> = ({
  theme,
  onPress,
  title,
  link,
}) => {
  return (
    <S.Container>
      <S.Col>
        <S.Title>{title || "Desafio de Diversidade e Inclusão"}</S.Title>
        <TouchableOpacity onPress={() => () => {}}>
          <S.Link>saiba mais</S.Link>
        </TouchableOpacity>
      </S.Col>
      <S.Row>
        <S.RegisterButton>
          <S.ButtonText>Registrar</S.ButtonText>
        </S.RegisterButton>
        <S.FooterText>Encerra em Julho</S.FooterText>
      </S.Row>
    </S.Container>
  );
};

export default ChallengeCard;
