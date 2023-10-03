import { EVisualTheme } from "@domain/enum/EVisualTheme";
import themes from "@themes/themes";
import styled from "styled-components/native";

interface IContainer {
  visualTheme: EVisualTheme;
}

export const Container = styled.Text<IContainer>`
  margin-top: 150px;
  color: ${(p: IContainer) =>
    p.visualTheme == EVisualTheme.light ? themes.colors.v2 : themes.colors.v1};
`;
