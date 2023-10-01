import styled, { css } from 'styled-components';
import themes from 'themes/index';

const cssActive = css`
  font-weight: 900;
  font-size: 23px;
  font-family: ${themes.fontFamily.lato};
  letter-spacing: 2.76px;

  &:hover {
    color: #2fc5fb;
  }

  &:active {
    color: #657a7c;
  }
`;

const cssDesactive = css`
  font-weight: 100;
  letter-spacing: 2.76px;
  font-family: ${themes.fontFamily.lato};
  font-size: 23px;
  color: #b0cccf;

  &:hover {
    color: #2fc5fb;
  }

  &:active {
    color: #657a7c;
  }
`;

export const Container = styled.div`
  display: flex;
  background-color: #0876a6;
  width: 487px;
  height: 76px;
  border-radius: 0 0 20px 20px;
  justify-content: space-between;
`;

interface IButton {
  active: boolean;
}

export const Button = styled.div<IButton>`
  display: flex;
  width: 50%;
  color: #ffffff;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 14px;
  cursor: pointer;

  ${(p: IButton) => (p.active == true ? cssActive : cssDesactive)};
`;
