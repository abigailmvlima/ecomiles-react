import { ETheme } from "@domain/enum/ETheme";
import * as S from "./styles";

export interface IButtonCancel {
  theme: ETheme;
  onPress?: () => void;
  label: string;
}
const ButtonCancel = ({ theme, onPress, label }: IButtonCancel) => {
  return (
    <S.Container themeSelected={theme} onPress={onPress && onPress}>
      <S.Title themeSelected={theme}>{label}</S.Title>
    </S.Container>
  );
};

export { ButtonCancel };
