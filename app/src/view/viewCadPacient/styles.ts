import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${themes.colors.v2};
`;

export const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.View`
  display: flex;
  margin: 25px 0;
`;

export const SubTitle = styled.View`
  display: flex;
  margin: 25px 0 8px 0;
`;

export const Contents = styled.View`
  display: flex;
  margin: 0 4%;
`;

export const Logo = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const Footer = styled.View`
  display: flex;
`;
