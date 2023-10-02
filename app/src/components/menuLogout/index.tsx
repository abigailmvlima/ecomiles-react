import { TouchableOpacity } from "react-native";

import { ContextNavigation } from "@context/contextNavigation";
import { TNavigation } from "@domain/types/TNavigation";
import { useContext } from "react";
import * as St from "./styles";

const MenuLogout = () => {
  const { route, history } = useContext<TNavigation>(ContextNavigation);
  console.log(history);

  return (
    <St.Container>
      <TouchableOpacity onPress={() => route.message()}>
        <St.SMessage route={history.route} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => route.home()}>
        <St.SUser route={history.route} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => route.codeBar()}>
        <St.SCameraCodeBar route={history.route} />
      </TouchableOpacity>
    </St.Container>
  );
};

export default MenuLogout;
