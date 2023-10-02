import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid rgba(6, 106, 149, 0.55);
  border-radius: 20px;
  width: 300px;
  height: 320px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
  flex-grow: 1;
`;

export const Titulo = styled.div`
  display: flex;
  color: ${themes.colors.v1};
  text-align: center;
  font-size: 25px;
  font-family: ${themes.fontFamily.inter};
  font-weight: 700;
  letter-spacing: 4.4px;
  margin: 0 10px;
  flex-wrap: wrap;
  line-height: 35px;
`;

export const Icone = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;
