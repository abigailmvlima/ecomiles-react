import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  border-bottom-width: 2px;
  border-bottom-color: #f97741;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 4px;
`;

export const Logo = styled.View`
  display: flex;
  border-right-width: 2px;
  border-right-color: #fff;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 10px 8px 15px;
`;

export const TextBase = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 5px 10px;
`;

export const Title = styled.Text`
  display: flex;
  font-family: ${themes.fonts.interBold};
  color: #fff;
  letter-spacing: 3px;
  font-size: 18px;
`;
export const Label = styled.Text`
  display: flex;
  font-family: ${themes.fonts.Inter_200ExtraLight};
  color: #b3b3b3;
  font-size: 12px;
`;
