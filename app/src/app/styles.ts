import themes from "@themes/themes";
import { Dimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import styled from "styled-components/native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const Container = styled(GestureHandlerRootView)`
  display: flex;
  width: ${screenWidth};
  height: ${screenHeight};
  background-color: ${themes.colors.v7};
  color: ${themes.colors.v1};
  position: relative;
`;

export const Content = styled.SafeAreaView`
  display: flex;
  flex-grow: 1;
`;
