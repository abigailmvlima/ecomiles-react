import { EColorType, ETitleSize } from "@domain/types/TStyles";
import * as St from "./styles";

const Title = ({
  label,
  size = ETitleSize.s3,
  colorType = EColorType.m1,
}: {
  label?: string;
  size?: ETitleSize;
  colorType?: EColorType;
}) => {
  return (
    <St.Container size={size} colorType={colorType}>
      {label}
    </St.Container>
  );
};

export default Title;
