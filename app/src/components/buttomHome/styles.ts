import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  width: 48%;
  background-color: #ffffff;
  border-radius: 10px;
  border-color: #2ca5d9;
  border-width: 1px;
  flex-direction: column;
`;

export const Title = styled.Text`
  display: flex;
  color: #066a95;
  text-align: center;
  font-size: 25px;
  font-family: ${themes.fonts.interSemiBold};
  letter-spacing: 1px;
  font-weight: bold;
  margin: 8px 12px;
  height: 70px;
  flex-wrap: wrap;
  ${(p: any) => p.textTransform && `text-transform: ${p.textTransform};`}
`;

export const Icon = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
