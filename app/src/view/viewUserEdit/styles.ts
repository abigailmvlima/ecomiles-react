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
  margin: 0 4%;
`;

export const Footer = styled.View`
  display: flex;
`;

export const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 10px 15px;
  & > :nth-child(1) {
    width: 150px;
    height: 150px;
  }
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
`;

export const TextOr = styled.Text<ITheme>`
  display: flex;
  margin: 55px 0;
  font-size: 17px;
  color: ${(p) => themes[p.themeSelected].colors.v9};
`;

export const ButtomRegister = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px 0;
`;

export const Form = styled.View`
  display: flex;
  margin: 0 6%;
`;

export const BoxUser = styled.View`
  display: flex;
  margin-right: 3%;
  flex-direction: column;
  margin-top: 4px;
  text-align: center;
`;

export const BoxUserUserName = styled.Text<ITheme>`
  display: flex;
  font-family: ${(p) => themes.fonts.Inter_200ExtraLight};
  font-size: 18px;
  letter-spacing: 2px;
  margin-bottom: 8px;
  text-align: center;
`;

export const BoxUserUserPoint = styled.Text<ITheme>`
  display: flex;
  font-family: ${(p) => themes.fonts.Inter_200ExtraLight};
  font-size: 15px;
  margin-bottom: 2px;
  text-align: center;
  color: #3b3c3d;
`;
