import Title from "@components/title";
import { ETitleSize } from "@domain/types/TStyles";
import * as St from "./styles";

const ButtomTitle = ({
  label,
  size = ETitleSize.s3,
  onPress,
}: {
  label?: string;
  size?: ETitleSize;
  onPress?: () => void;
}) => (
  <St.Container onPress={onPress}>
    <Title size={size} label={label} />
  </St.Container>
);

export { ButtomTitle };
