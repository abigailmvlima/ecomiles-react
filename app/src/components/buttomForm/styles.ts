import themes from "@themes/themes";
import styled, { css } from "styled-components/native";

export const Base = styled.View`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  position: relative;
`;

const styleCenter = css`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  display: flex;
  flex-grow: 1;
  background-color: #e36e3d;
  border-radius: 10px;
  ${(p: any) => p.textCenter === true && styleCenter}
`;

export const Title = styled.Text`
  display: flex;
  color: #d8fcf5;
  text-align: center;
  font-size: 17px;
  font-family: ${themes.fonts.interSemiBold};
  letter-spacing: 1px;
  font-weight: bold;
  margin: 12px 12px;
  ${(p: any) => p.textTransform && `text-transform: ${p.textTransform};`}
`;
