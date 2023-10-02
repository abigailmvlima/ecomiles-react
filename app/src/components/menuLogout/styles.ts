import { CameraCodeBar, Message, User } from "@assets/svg";
import { TStyleRoute } from "@domain/types/TStyles";
import show from "@show/index";
import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 70px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-width: 3px;
  border-top-color: ${themes.colors.v3};
`;

export const SMessage = styled(Message)<TStyleRoute>`
  fill: ${(p) => (p.route == show.route.message ? "#FFDFD2" : "#ff9e76")};
`;

export const SUser = styled(User)<TStyleRoute>`
  fill: ${(p) => (p.route == show.route.home ? "#FFDFD2" : "#ff9e76")};
`;

export const SCameraCodeBar = styled(CameraCodeBar)<TStyleRoute>`
  fill: ${(p) => (p.route == show.route.codeBar ? "#FFDFD2" : "#ff9e76")};
`;
