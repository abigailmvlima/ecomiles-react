import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: ${themes.fontFamily.inter};
  font-size: 12px;
`;

export const Content = styled.div`
  margin: 15px 5%;
  flex-direction: column;
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

export const InputButton = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

export const Button = styled.div`
  display: flex;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 5%;
`;

export const FooterContent = styled.div`
  display: flex;
`;

export const Search = styled.div`
  display: flex;
  width: 90%;
  margin: 55px 5% 15px 5%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${themes.colors.white};
  padding: 0 0 5px 0;
`;

export const InputBase = styled.div`
  width: 50%;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export const Input = styled.div`
  flex-grow: 1;
  font-size: 15px;
  margin-right: 10px;
`;

export const SubTitle = styled.div`
  font-size: 20px;
`;
export const Form = styled.div`
  flex-wrap: wrap;
`;
export const Name = styled.div`
  width: 70%;
`;
export const Sexy = styled.div`
  width: 30%;
`;
export const CPF = styled.div`
  width: 30%;
`;
export const Naturalidade = styled.div`
  width: 50%;
`;
export const DtNascimento = styled.div``;
export const StateCivil = styled.div``;
export const Phone = styled.div``;
export const Mail = styled.div``;

export const CEP = styled.div``;
export const Endereco = styled.div``;
export const Numero = styled.div``;
export const Complemento = styled.div``;
export const Bairro = styled.div``;
export const Cidade = styled.div``;
