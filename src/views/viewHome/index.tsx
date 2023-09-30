import Logo from "components/logo";
import Menu from "components/menu";
import ButtonShortCut from "components/buttonShortCut";
import { EImages } from "domains/enums/EImages";
// import MediasSociais from "../../components/mediasSociais";
import * as S from "./styles";

const ViewHome = () => {
  return (
    <S.Container>
      <S.Header>
        <Logo />
        <Menu />
      </S.Header>
      <S.Body>
        <S.Button>
          <ButtonShortCut title={`Lista\nPacientes`} image={EImages.list} />
        </S.Button>
        <S.Button>
          <ButtonShortCut title={`Cadastrar\nPaciente`} image={EImages.plus} />
        </S.Button>
      </S.Body>
      <S.Footer></S.Footer>
    </S.Container>
  );
};

export default ViewHome;
