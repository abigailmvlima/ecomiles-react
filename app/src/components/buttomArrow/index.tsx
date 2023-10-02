import { ArrowLeft, ArrowRight } from "@assets/svg";
import { ETypeArrowDirection } from "@domain/enum/ETypeArrow";
import * as St from "./styles";

const ButtomArrow = ({
  label,
  type,
  onPress,
}: {
  label?: string;
  type?: ETypeArrowDirection;
  onPress?: () => void;
}) => (
  <St.Container onPress={onPress}>
    {type === ETypeArrowDirection.left ? (
      <ArrowLeft />
    ) : type === ETypeArrowDirection.right ? (
      <ArrowRight />
    ) : (
      <ArrowLeft />
    )}
  </St.Container>
);

export { ButtomArrow };
