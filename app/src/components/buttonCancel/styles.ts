import { ITheme } from "@domain/interfaces/ITheme";
import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<ITheme>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #64563a;
  border-color: #64563a;
  border-width: 1px;
  border-radius: 8px;
`;

export const Title = styled.Text<ITheme>`
  display: flex;
  margin: 15px 20px;
  font-family: ${(p) => themes.fonts.Inter_600SemiBold};
  color: ${(p) => themes[p.themeSelected].buttonGo.color};
  letter-spacing: 2px;
  font-size: 20px;
`;
