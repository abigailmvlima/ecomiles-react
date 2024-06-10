import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #d3d3d3;
  padding: 16px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin: auto;
  flex-direction: column;
  text-align: end;
`;
export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;
export const Col = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 82%;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  text-align: center;
  width: 100%;
`;

export const Link = styled.Text`
  font-size: 16px;
  color: #007aff;
  text-align: end;
`;

export const RegisterButton = styled.TouchableOpacity`
  background-color: #386123;
  padding: 10px 20px;
  border-radius: 8px;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const FooterText = styled.Text`
  color: #386123;
  font-size: 14px;
  margin-top: 8px;
`;
