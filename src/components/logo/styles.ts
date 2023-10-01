import svg from "assets/svg";
import styled from "styled-components";
import themes from "themes/index";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.div`
  display: flex;
`;

export const Title = styled.div`
  display: flex;
  font-family: ${themes.fontFamily.inter};
  color: ${themes.colors.v1};
  font-weight: 900;
  font-size: 55px;
  letter-spacing: 15px;
  line-height: 59px;
  margin-top: 10px;
  margin-left: 15px;
`;
