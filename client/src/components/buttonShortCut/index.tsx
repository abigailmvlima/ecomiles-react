import { EImages } from 'domains/enums/EImages';
import { MouseEventHandler } from 'react';
import * as S from './styles';

type TProps = {
  title: string;
  image: EImages;
  onClick?: MouseEventHandler<any> | undefined;
};

const ButtonShortCut = ({ title, image, onClick }: TProps) => {
  return (
    <S.Container>
      <S.Content onClick={onClick}>
        <S.Titulo>{title}</S.Titulo>
        <S.Icone>
          {/* {image == EImages.list ? (
            <svg.Health />
          ) : image == EImages.plus ? (
            <svg.Plus />
          ) : (
            <></>
          )} */}
        </S.Icone>
      </S.Content>
    </S.Container>
  );
};

export default ButtonShortCut;
