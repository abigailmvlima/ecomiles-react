import { ITheme } from "@domain/interfaces/ITheme";
import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView<ITheme>`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(p) => themes[p.themeSelected].colors.v1};
`;

export const Contents = styled.View`
  display: flex;
  background-color: #f3f8f0;
  height: 78%;
  justify-content: center;
`;

export const Footer = styled.View`
  display: flex;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 15px;
  margin-left: 5px;
`;

export const HeaderLogo = styled.View`
  display: flex;
  margin-left: 1%;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const BoxUser = styled.View`
  display: flex;
  margin-right: 3%;
  flex-direction: column;
  margin-top: 4px;
`;

export const BoxUserUserName = styled.Text<ITheme>`
  display: flex;
  font-family: ${(p) => themes.fonts.Inter_200ExtraLight};
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 4px;
  text-align: right;
`;

export const BoxUserUserPoint = styled.Text<ITheme>`
  display: flex;
  font-family: ${(p) => themes.fonts.Inter_200ExtraLight};
  font-size: 12px;
  margin-bottom: 2px;
  text-align: right;
  color: #3b3c3d;
`;

export const Buttons = styled.View`
  display: flex;
  flex-direction: column;
  margin: 5px 5%;
  align-items: center;
`;

export const ButtonGo = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 15px 0;
`;

export const TextOr = styled.Text<ITheme>`
  display: flex;
  margin: 55px 0;
  font-size: 17px;
  color: ${(p) => themes[p.themeSelected].colors.v9};
`;

export const ButtomRegister = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const Form = styled.View`
  display: flex;
  margin: 0 6%;
`;
