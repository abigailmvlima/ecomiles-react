import svg from 'assets/svg';
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
  margin: 0 5%;
`;

export const Body = styled.div`
  display: flex;
  margin: 0 5%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BaseDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

export const BSProfissional = styled(svg.BSProfissional)`
  display: flex;
  width: 70%;
`;

export const TitleFullStack = styled(svg.TitleFullStack)`
  display: flex;
  width: 50%;
  margin: 35px 0;
`;

export const PhotoBS = styled(svg.PhotoBS)`
  display: flex;
  width: 60%;
`;

export const Title = styled.div`
  font-family: ${themes.fontFamily.roboto};
  font-weight: 800;
  display: flex;
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
  text-align: center;
  color: #9d9d9d;
  width: 75%;
  letter-spacing: 3px;
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
  font-weight: 700;
  text-transform: uppercase;
  color: #9d9d9d;
  margin: 4px;
  font-family: ${themes.fontFamily.roboto};
  font-size: 13px;
  letter-spacing: 3px;
`;

export const UpdateValue = styled.div`
  display: flex;
  font-size: 19px;
  font-weight: 800;
  color: #9d9d9d;
  margin: 4px;
  font-family: ${themes.fontFamily.roboto};
  font-size: 22px;
  letter-spacing: 3px;
`;
