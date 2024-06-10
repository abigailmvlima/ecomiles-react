import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background-color: #fff;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const ButomLogo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButomBase = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e0f1eb;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e7f3ef;
  }

  &:active {
    background-color: #aebeb9;
  }
`;

export const ButomImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
export const ButomDescription = styled.div``;

export const Profile = styled.div`
  display: flex;
  text-align: right;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Greeting = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 13px;
  color: #54585c;
  letter-spacing: 1px;
`;

export const Miles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 11px;
  color: #86898d;
  letter-spacing: 1px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const Logout = styled.a`
  font-size: 12px;
  color: #0066cc;
  text-decoration: none;
  cursor: pointer;
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 24px;
  text-align: center;
`;

export const Section = styled.div`
  margin: 4px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  margin-right: 4px;
`;

export const SectionContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const HighlightedText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  background-color: #e0f7fa;
  padding: 10px;
  border-radius: 5px;
`;
