import { EColorType, ETitleSize } from "@domain/types/TStyles";
import themes from "@themes/themes";
import { getColorTypeTitle } from "@utils/styles";
import styled, { css } from "styled-components/native";

interface IText {
  size: ETitleSize;
  colorType: EColorType;
}

const CS1 = css``;
const CS2 = css`
  font-size: 17px;
  font-family: ${themes.fonts.interBold};
  letter-spacing: 2px;
`;

const CS3 = css`
  font-size: 24px;
`;

const CS4 = css`
  font-size: 30px;
  letter-spacing: 1px;
`;

const CS5 = css`
  font-size: 35px;
  letter-spacing: 4px;
  font-family: ${themes.fonts.Inter_800ExtraBold};
`;

export const Container = styled.Text<IText>`
  font-family: ${themes.fonts.interBold};
  color: ${(p) => getColorTypeTitle(p.colorType)};
  letter-spacing: 3px;
  margin: 5px 0;
  ${(p) => p.size == ETitleSize.s1 && CS1}
  ${(p) => p.size == ETitleSize.s2 && CS2}
  ${(p) => p.size == ETitleSize.s3 && CS3}
  ${(p) => p.size == ETitleSize.s4 && CS4}
  ${(p) => p.size == ETitleSize.s5 && CS5}
`;
