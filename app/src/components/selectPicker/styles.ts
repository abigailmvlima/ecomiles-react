import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding-top: 0;
  margin-bottom: 8px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  border-bottom-width: 0.5px;
  border-bottom-color: ${themes.colors.v3};
  padding-top: 0;
`;

export const Base = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: 6;
  margin-right: 6;
  padding-bottom: 5px;
`;

export const Input = styled.View`
  display: flex;
  flex-grow: 1;
  font-size: 15px;
  color: ${themes.colors.v16};
  margin-left: 8px;
`;

export const ErrorText = styled.Text`
  display: flex;
  text-align: right;
  color: #f24e4e;
  font-size: 17px;
  letter-spacing: 1px;
  margin-right: 4px;
`;

export const LabelBase = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.Text`
  display: flex;
  width: 30%;
  font-family: ${themes.fonts.Archivo_200ExtraLight};
  font-weight: 300;
  color: ${themes.colors.v16};
`;

export const InputBase = styled.Text`
  display: flex;
`;
