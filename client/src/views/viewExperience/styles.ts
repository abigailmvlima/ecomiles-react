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
  flex-direction: column;
`;

export const Cols = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const MyTitle = styled(svg.MyExperience)`
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
  width: 80%;
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

export const Content = styled.div`
  display: flex;
  width: 100%;
`;

export const Expirience = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExpirienceRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 5px;
`;

export const ExpirienceLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ExpirienceTitle = styled.div`
  display: flex;
  flex-grow: 1;
  word-wrap: break-word;
  font-family: 'Roboto';
  font-weight: 300;
  line-height: 40px;
  font-size: 20px;
  letter-spacing: 3px;
  color: #a8a8a8;
`;

export const ExpirienceResponsabilities = styled.div`
  display: flex;
  word-wrap: break-word;
  width: 80%;
  font-family: 'Roboto';
  font-weight: 300;
  line-height: 40px;
  font-size: 20px;
  letter-spacing: 3px;
  color: #a8a8a8;
`;

export const ExpiriencePosition = styled.div`
  display: flex;
  flex-grow: 1;
  word-wrap: break-word;
  font-family: 'Roboto';
  font-weight: 300;
  line-height: 40px;
  font-size: 20px;
  letter-spacing: 3px;
  color: #a8a8a8;
`;

export const ExpirienceLabel = styled.div`
  display: flex;
  width: 20%;
  font-family: 'Roboto';
  font-size: 19px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 40px;
  letter-spacing: 3px;
  color: #878787;
`;
