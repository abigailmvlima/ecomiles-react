import { Logo } from "@assets/svg";
import { ETitleSize } from "@domain/types/TStyles";
import * as St from "./styles";

const HeaderLine = ({
  label,
  size = ETitleSize.s3,
}: {
  label?: string;
  size?: ETitleSize;
}) => {
  return (
    <St.Container>
      <St.Content>
        <St.Logo>
          <Logo width={37} height={37} />
        </St.Logo>
        <St.TextBase>
          <St.Title>PAGUE FACIL</St.Title>
          <St.Label>{label}</St.Label>
        </St.TextBase>
      </St.Content>
    </St.Container>
  );
};

export default HeaderLine;
