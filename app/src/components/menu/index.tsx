import { IconHome, IconPacients, IconTools } from "@assets/svg";
import { ContextNavigation } from "@context/contextNavigation";
import { TNavigation } from "@domain/types/TNavigation";
import { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as St from "./styles";

const Menu = ({ onPress }: { onPress?: () => void }) => {
  const { route } = useContext<TNavigation>(ContextNavigation);

  return (
    <St.Container>
      <St.Content>
        <St.Col>
          <TouchableOpacity onPress={route.cadPaient}>
            <IconPacients />
          </TouchableOpacity>
        </St.Col>
        <St.Col>
          <TouchableOpacity onPress={route.home}>
            <IconHome />
          </TouchableOpacity>
        </St.Col>
        <St.Col>
          <TouchableOpacity>
            <IconTools />
          </TouchableOpacity>
        </St.Col>
      </St.Content>
    </St.Container>
  );
};

export { Menu };
