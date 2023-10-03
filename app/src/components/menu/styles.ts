import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${themes.colors.white};
  border-color: ${themes.colors.v3};
  border-top-width: 2px;
  width: 100%;
  height: 300px;
  position: absolute;
  left: 0;
  bottom: -200px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  margin: 25px 0 50px 0;
  align-items: center;
  justify-content: center;
`;

export const Col = styled.View`
  display: flex;
  width: 110px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const ContentLoading = styled.View`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
`;

export const PhotoBase = styled.View`
  display: flex;
  width: 36%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Base = styled.View`
  display: flex;
  width: 64%;
  flex-direction: column;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  display: flex;
  font-family: ${themes.fonts.interBold};
  font-size: 20px;
  letter-spacing: 2px;
  color: ${themes.colors.title.c3};
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  margin: 8px 8px 0px 8px;
`;

export const Description = styled.Text`
  display: flex;
  text-align: justify;
  font-family: ${themes.fonts.interSemiBold};
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 1px;
  color: ${themes.colors.v1};
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  margin: 8px 8px 0px 8px;
`;
