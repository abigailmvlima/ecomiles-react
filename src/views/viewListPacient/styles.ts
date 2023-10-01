import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: ${themes.fontFamily.inter};
  font-size: 190px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 260px;
  margin: 0 5%;
  background-color: ${themes.colors.white};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 45px;
  letter-spacing: 17px;
  font-family: ${themes.fontFamily.roboto};
  color: ${themes.colors.v2};
  font-weight: bold;
  line-height: 55px;
`;

export const Pacient = styled.div`
  flex-direction: column;
  width: 90%;
  margin: 0 5%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${themes.colors.v2};
  flex-grow: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Button = styled.div`
  display: flex;
  margin: 25px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 5%;
`;

export const FooterContent = styled.div`
  display: flex;
`;

export const Search = styled.div`
  display: flex;
  width: 90%;
  border-bottom: 1px solid ${themes.colors.white};
  margin: 15px 5%;
  justify-content: space-between;
  align-items: center;
`;

export const InputBase = styled.div`
  width: 50%;
`;

export const Input = styled.div`
  flex-grow: 1;
  font-size: 15px;
`;
