import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 8px 15px;
  justify-content: space-between;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px 8px;
`;

export const RedirectsBase = styled.View`
  display: flex;
  flex-direction: column;
  border-right-width: 3px;
  border-right-color: #fff;
  padding-right: 10px;
`;

export const CardInfo = styled.View`
  display: flex;
  margin: 10px 0;
`;

export const Title1 = styled.View`
  display: flex;
  margin: 25px 0;
`;

export const Title2 = styled.View`
  display: flex;
  margin: 8px 0;
`;

export const CardInfoBase = styled.View`
  display: flex;
  margin: 8px 0;
`;

export const ContentBase = styled.View`
  display: flex;
  margin: 8px 0;
`;
