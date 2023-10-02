import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 15px;
  font-family: ${themes.fontFamily.inter};
  color: ${themes.colors.white};
  letter-spacing: 2px;
  margin-left: 5px;
`;

export const Base = styled.div`
  height: 57px;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  font-size: 18px;
  font-family: ${themes.fontFamily.inter};
  color: ${themes.colors.v2};
  border-radius: 10px;
  border: 1px solid ${themes.colors.v6};
  margin: 5px 0;
`;
