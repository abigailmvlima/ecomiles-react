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
  flex-wrap: wrap;
`;

export const Cols = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 0 1px;
`;

export const MyTitle = styled(svg.MyTrainings)`
  display: flex;
  width: 90%;
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

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 80px;
  margin-left: 60px;
`;

export const BaseCols = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
`;

export const GraduationBase = styled.div`
  display: flex;
  width: 30%;
`;

export const LinguagesBase = styled.div`
  display: flex;
  width: 30%;
`;

export const ContentTitle = styled.div`
  display: flex;
  text-transform: uppercase;
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: 800;
  color: #b9b9b9;
  letter-spacing: 3px;
  margin-bottom: 2px;
  margin-bottom: 20px;
`;

export const ContentBase = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const ContentSubTitle = styled.div`
  display: flex;
  text-transform: uppercase;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 800;
  color: #878787;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

export const ContentValue = styled.div`
  display: flex;
  text-transform: capitalize;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 300;
  color: #bdbdbd;
  letter-spacing: 2px;
  margin-bottom: 15px;
`;
