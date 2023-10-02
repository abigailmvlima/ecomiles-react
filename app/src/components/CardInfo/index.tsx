import { ContextNavigation } from "@context/contextNavigation";
import { TCardInfo } from "@domain/types/TCardInfo";
import { TNavigation } from "@domain/types/TNavigation";
import { useContext } from "react";
import { Image } from "react-native";
import * as St from "./styles";

const CardInfo = ({
  info,
  onPress,
}: {
  info?: TCardInfo;
  onPress?: () => void;
}) => {
  const { go } = useContext<TNavigation>(ContextNavigation);

  return (
    <St.Container>
      {info ? (
        <St.Content
          onPress={() => {
            go(info.redirect);
            onPress && onPress;
          }}
        >
          <St.PhotoBase>
            <Image
              source={info.photo} // Use require para importar imagens
              style={{
                width: "100%",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
              resizeMode="stretch"
            />
          </St.PhotoBase>
          <St.Base>
            <St.Title>{info.title}</St.Title>
            <St.Description>{info.description}</St.Description>
          </St.Base>
        </St.Content>
      ) : (
        <St.ContentLoading />
      )}
    </St.Container>
  );
};

export { CardInfo };
