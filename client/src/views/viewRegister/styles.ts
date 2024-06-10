import svg from 'assets/svg';
import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${themes.fontFamily.inter};
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-direction: row;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const Icon = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LogoCine = styled.img`
  display: flex;
  width: 80%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  padding: 15px 25px 15px 35px;
  flex-grow: 1;
  border-left: 1px solid #d0d2cd;
`;

export const ImageBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

export const IconEcoMiles = styled.img`
  display: flex;
  width: 80%;
`;

export const Input = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const Forgot = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-end;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px 0;
`;

export const Registers = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Or = styled.div`
  display: flex;
  margin: 30px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${themes.colors.v3};
`;

export const LinkLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  font-size: 38px;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 3px;
  color: #734e00;
  text-align: center;
`;

export const TitleBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  margin: 30px 0;
  width: 910px;
`;
export const UpperIcon = styled.div`
  display: flex;
  width: 363px;
  height: 280px;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  top: 20px;
  right: 30px;
`;

export const EcoMilesPlanet = styled(svg.EcoMilesPlanet)`
  display: flex;
  width: 70%;
`;
