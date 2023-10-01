import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${themes.colors.v3};
  border: 2px solid rgba(6, 106, 149, 0.55);
  border-radius: 15px;
  height: 47px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }

  &:active {
    background-color: #949494;
  }
`;

export const Titulo = styled.div`
  display: flex;
  color: ${themes.colors.v2};
  text-align: center;
  font-size: 18px;
  font-family: ${themes.fontFamily.inter};
  font-weight: 100;
  letter-spacing: 3px;
  margin: 0 15px;
  flex-wrap: wrap;
  line-height: 35px;
  padding: 0 30px;
`;
