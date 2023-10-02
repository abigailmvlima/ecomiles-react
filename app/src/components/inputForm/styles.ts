import { EnvolopeInput, EyeClosed, EyeOpen } from "@assets/svg";
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
  border-bottom-width: 3px;
  border-bottom-color: ${themes.colors.v3};
  padding-top: 0;
`;

export const Base = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 6;
  margin-right: 6;
  margin-bottom: 6px;
`;

export const IconEnvolope = styled(EnvolopeInput)`
  display: flex;
  flex-direction: row;
  width: 33px;
  height: 27px;
`;

export const IconEyeClosed = styled(EyeClosed)`
  display: flex;
  flex-direction: row;
  width: 33px;
  height: 27px;
`;

export const IconEyeOpen = styled(EyeOpen)`
  display: flex;
  flex-direction: row;
  width: 33px;
  height: 27px;
`;

export const Input = styled.TextInput`
  display: flex;
  flex-grow: 1;
  font-size: 18px;
  padding: 8px;
  border-radius: 6px;
  background-color: ${themes.colors.v13};
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
`;

export const InputBase = styled.Text`
  display: flex;
`;
