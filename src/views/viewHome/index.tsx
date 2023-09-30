
import Logo from "../../components/logo";
import Menu from "../../components/menu";
import Button from "../../components/button";
// import MediasSociais from "../../components/mediasSociais";
import * as S from "./styles";

const ViewHome = () => {
  return (
    <S.Container>
      <Logo />
      <Menu />
      <Button />
      {/* <MediasSociais /> */}
    </S.Container>
  );
};

export default ViewHome;
