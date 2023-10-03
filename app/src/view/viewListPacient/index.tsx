import { ContextNavigation } from "@context/contextNavigation";
import { useContext } from "react";
import * as S from "./styles";

import { IconLogoTopWhite } from "@assets/svg";
import { Menu } from "@components/menu";
import Title from "@components/title";
import { TNavigation } from "@domain/types/TNavigation";
import { ETitleSize } from "@domain/types/TStyles";

const ViewListPacient = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  return (
    <S.Container>
      <S.Contents>
        <S.Logo>
          <IconLogoTopWhite />
        </S.Logo>
        <S.Title>
          <Title label="Ola, Dr Marcio Alvarenga" size={ETitleSize.s4} />
          <Title
            label="São Paulo, 12 de Janeiro de 2023"
            size={ETitleSize.s2}
          />
        </S.Title>
      </S.Contents>
      <S.Footer>
        <Menu />
      </S.Footer>
    </S.Container>
  );
};

export default ViewListPacient;
