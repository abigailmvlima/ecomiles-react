import svg from 'assets/svg';
import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: ${themes.fontFamily.inter};
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
  flex-direction: row;
  width: 50%;
  margin: 0 1px;
  justify-content: flex-start;
  align-items: flex-end;

`;

export const MyTitle = styled(svg.MyHobbies)`
  display: flex;
`;

export const BaseSVG = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TitleSVG = styled(svg.BSProfissional)`
  display: flex;
  width: 100%;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 10% 25px 10%;

  `

export const ContentBase = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 35px;
`

export const ContentTitle = styled.div`
  display: flex;
  width: 25%;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #686868;
  letter-spacing: 2px;
`

export const ContentText = styled.div`
  display: flex;
  width: 75%;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 200;
  color: #686868;
  letter-spacing: 2px;
  text-align: justify;
`