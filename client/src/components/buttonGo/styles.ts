import { EButtonType } from 'domains/enums/EButtons';
import styled from 'styled-components';
import themes from 'themes/index';

interface IContainerProps {
  type: EButtonType;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  background-color: #386123;

  border: 2px solid #5c8249;

  border-radius: 15px;
  height: 47px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background-color: ${({ type }) => (type === 3 ? '#64563A' : '#386123')};
  color: ${({ type }) => (type === 3 ? '#FFF' : '#FFF')};

  &:hover {
    background-color: ${({ type }) => (type === 3 ? '#9d8a64' : '#58883f')};
  }

  &:active {
    background-color: ${({ type }) => (type === 3 ? '#706142' : '#3c572d')};
  }
`;

interface ITitleProps {
  type: EButtonType;
}

export const Title = styled.div<ITitleProps>`
  display: flex;
  text-align: center;
  font-size: 25px;
  font-family: ${themes.fontFamily.inter};
  font-weight: 500;
  letter-spacing: 1px;
  margin: 10px;
  flex-wrap: wrap;
  line-height: 35px;

  color: #fff;
`;
