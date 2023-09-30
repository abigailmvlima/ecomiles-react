import svg from "assets/svg";
import * as S from "./styles";
import { EImages } from "domains/enums/EImages";

type TProps = {
  title: string;
  image: EImages;
};

const ButtonShortCut = ({ title, image }: TProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.Titulo>{title}</S.Titulo>
        <S.Icone>
          {image == EImages.list ? (
            <svg.Health />
          ) : image == EImages.plus ? (
            <svg.Plus />
          ) : (
            <></>
          )}
        </S.Icone>
      </S.Content>
    </S.Container>
  );
};

export default ButtonShortCut;
