import themes from "@themes/themes";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  background-color: ${themes.colors.v13};
  border-color: ${themes.colors.v14};
  border-width: 1px;
`;

export const Content = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
`;

export const ContentLoading = styled.View`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
`;

export const PhotoBase = styled.View`
  display: flex;
  width: 36%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Base = styled.View`
  display: flex;
  width: 64%;
  flex-direction: column;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  display: flex;
  font-family: ${themes.fonts.interBold};
  font-size: 20px;
  letter-spacing: 2px;
  color: ${themes.colors.title.c3};
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  margin: 8px 8px 0px 8px;
`;

export const Description = styled.Text`
  display: flex;
  text-align: justify;
  font-family: ${themes.fonts.interSemiBold};
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 1px;
  color: ${themes.colors.v1};
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  margin: 8px 8px 0px 8px;
`;
