import { Logo } from "@assets/svg";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Content = styled.View`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin: 0 20px;
`;

export const BottomAction = styled.View`
  display: flex;
  flex-direction: row;
`;

export const BottomActionRisk = styled.View`
  display: flex;
  flex-direction: column;
  border-right-width: 3px;
  border-right-color: #fff;
  padding: 10px 0;
  padding-right: 10px;
  padding-left: 22px;
  margin-right: 8px;
`;

export const BottomActionBase = styled.View`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin: 0 5px;
`;

export const RowLogo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 35%;
`;

export const IconLogo = styled(Logo)`
  width: 150px;
  height: 150px;
`;

export const TitleRegister = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
