import svg from "assets/svg";
import * as S from "./styles";

const Logo = () => {
  return (
    <S.Container>
      <S.Icon>
        <svg.Heart  />
      </S.Icon>
      <S.Title>
        Doctor<br />Health
      </S.Title>
    </S.Container>
  );
};

export default Logo;
