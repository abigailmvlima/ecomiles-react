import Texts from "@components/texts";
import { ContextNavigation } from "@context/contextNavigation";
import { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as S from "./styles";

const ViewHome = () => {
  const { route } = useContext(ContextNavigation);
  return (
    <S.Container>
      <TouchableOpacity
        onPress={() => {
          route.login();
        }}
      >
        <Texts>ViewHome</Texts>
      </TouchableOpacity>
    </S.Container>
  );
};

export default ViewHome;
