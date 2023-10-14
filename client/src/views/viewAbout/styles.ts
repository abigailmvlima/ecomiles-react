import svg from 'assets/svg';
import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: ${themes.fontFamily.roboto};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 5%;
  position: relative;
  padding-bottom: 30px;
  margin-bottom: 15px;
`;

export const ButtonBack = styled.div`
  display: flex;
  background-color: #713262;
  position: absolute;
  left: -5.6%;
  bottom: 0px;
`;

export const Body = styled.div`
  display: flex;
  margin: 25px 5%;
  flex-direction: row;
`;

export const Cols = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 1px;
`;

export const MeAbout = styled(svg.MeAbout)`
  display: flex;
  width: 90%;
`;

export const BaseTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MyTitle = styled(svg.Hello)`
  display: flex;
  margin: 0 15px 15px 15px;
  margin-bottom: 25px;
`;

export const TitleFullStack = styled(svg.TitleFullStack)`
  display: flex;
  width: 50%;
  margin: 15px 0;
`;

export const PhotoBS = styled(svg.PhotoBS)`
  display: flex;
  width: 60%;
`;

export const Title = styled.div`
  display: flex;
  font-size: 19px;
  font-weight: bold;
  line-height: 26px;
  text-align: center;
  color: #9d9d9d;
  width: 70%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UpdateBase = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid #aaaaaa;
  padding: 4px 20px;

  position: absolute;
  bottom: 5%;
`;

export const UpdateTitle = styled.div`
  display: flex;
  font-size: 19px;
  font-weight: bold;
  color: #9d9d9d;
  margin: 4px;
`;

export const UpdateValue = styled.div`
  display: flex;
  font-size: 19px;
  font-weight: bold;
  color: #9d9d9d;
  margin: 4px;
`;

export const MapBase = styled.div`
  display: flex;
  background-color: aqua;
`;

export const Description = styled.div`
  display: flex;
  text-align: justify;
  font-size: 23px;
  color: #a8a8a8;
  letter-spacing: 1px;
  line-height: 36px;
`;

export const BaseIcon = styled.div`
  display: flex;
  font-size: 25px;
  text-align: justify;
  width: 100%;
  margin: 15px 0;
  height: 150px;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconTitle = styled.div`
  display: flex;
  margin: 5px 0;
  font-family: ${themes.fontFamily.roboto};
  font-weight: bold;
  color: #aeaeae;
  font-size: 22px;
  letter-spacing: 2px;
  margin-top: 15px;
`;

export const IconValue = styled.div`
  display: flex;
  font-family: ${themes.fontFamily.roboto};
  font-weight: 200;
  color: #414141;
  font-size: 22px;
  letter-spacing: 2px;
`;

export const Form = styled.div`
  display: flex;
  margin: 65px 0 10px 0;
  flex-direction: column;
`;

export const Input = styled.input`
  display: flex;
  width: 120px;
  font-family: ${themes.fontFamily.roboto};
  font-weight: 500;
  color: #878787;
  color: #;
  font-size: 22px;
  letter-spacing: 2px;
  border: 2px solid #bcbcbc;
  padding: 18px;
  margin-right: 20px;
`;

export const ButtonSearch = styled.div`
  display: flex;
  border: 2px solid #ffc5f3;
  padding: 18px;
  background-color: #ffdef7;
  font-family: ${themes.fontFamily.roboto};
  font-weight: 500;
  color: #878787;
  font-size: 20px;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #d4b3cd;
  }

  &:active {
    background-color: #d77fc2;
  }
`;

export const DisplayAddress = styled.div`
  display: flex;
  border: 2px solid #bcbcbc;
  padding: 18px;
  width: 70%;
`;

export const DisplayNeighborhood = styled.div`
  display: flex;
  border: 2px solid #bcbcbc;
  padding: 18px;
  width: 70%;
`;

export const DisplayCity = styled.div`
  display: flex;
  border: 2px solid #bcbcbc;
  padding: 18px;
  width: 70%;
`;

export const BaseLine = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  letter-spacing: 2px;
  color: #da75c4;
  font-weight: 400;
  font-family: 'Roboto';
`;

export const BaseInput = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

export const Label = styled.div`
  text-transform: uppercase;
  display: flex;
  font-family: 'Roboto';
  margin: 20px 0 2px 0;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #acacac;
`;
