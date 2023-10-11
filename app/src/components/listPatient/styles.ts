import themes from "@themes/themes";
import styled, { css } from "styled-components/native";

export const Base = styled.ScrollView`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const styleCenter = css`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  display: flex;
  flex-grow: 1;
  ${(p: any) => p.textCenter === true && styleCenter}
  margin: 5px 0px;
  border-bottom-width: 1px;
  border-bottom-color: #489bbe;
`;

export const Title = styled.Text`
  display: flex;
  color: #d8fcf5;
  font-size: 17px;
  font-family: ${themes.fonts.interSemiBold};
  letter-spacing: 1px;
  font-weight: bold;
  margin: 3px 0px;
  ${(p: any) => p.textTransform && `text-transform: ${p.textTransform};`}
`;

export const Texts = styled.Text`
  display: flex;
  color: #d8fcf5;
  font-size: 13px;
  font-family: ${themes.fonts.interLight};
  letter-spacing: 0px;
  margin: 3px 0px;
  font-weight: 100;
  ${(p: any) => p.textTransform && `text-transform: ${p.textTransform};`}
`;
