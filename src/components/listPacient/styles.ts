import styled, { css } from 'styled-components';
import themes from 'themes/index';

const styledTitle = css`
  font-size: 18px;
  color: ${themes.colors.white};
  letter-spacing: 1px;
  font-family: ${themes.fontFamily.lato};
  margin: 15px 4px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 76px;
  border-radius: 0 0 20px 20px;
  justify-content: space-between;
`;

export const Row = styled.div`
  border-bottom: solid 0.5px #65c2eb;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: #0081b9;
  }

  &:active {
    background-color: #0072a3;
  }
`;
export const ColPacient = styled.div`
  ${styledTitle};
`;

export const ColPhone = styled.div`
  ${styledTitle};
`;

export const ColMail = styled.div`
  ${styledTitle};
`;

export const ColDateBirth = styled.div`
  ${styledTitle};
`;

export const ColCity = styled.div`
  ${styledTitle};
`;

export const ColActions = styled.div`
  ${styledTitle};
  margin-right: 25px;
`;
