import themes from '@themes/themes';
import styled, { css } from 'styled-components/native';

export const Base = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const styleCenter = css`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  display: flex;
  border-radius: 10px;
  ${(p: any) => p.textCenter === true && styleCenter}
`;

export const Title = styled.Text`
  display: flex;
  color: #b3b3b3;
  font-size: 15px;
  font-family: ${themes.fonts.Inter_200ExtraLight};
  ${(p: any) => p.textTransform && `text-transform: ${p.textTransform};`}
  letter-spacing: 0.1px;
  font-weight: bold;
  margin: 2px 2px;
`;
