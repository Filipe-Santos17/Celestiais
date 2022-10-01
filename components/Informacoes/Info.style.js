import { View, Text } from "react-native";
import styled from "styled-components";

export const ContainerView = styled(View)`
  width: 95%;
  padding: 2%;
  border-radius: 12;
  background-color: #ccc;
  margin: 0 2%;
  margin-bottom: 2%;
  overflow: hidden;
`;

export const TitleView = styled(Text)`
  font-size: 16;
  color: #2d2d2d;
  font-weight: 700;
`;

export const BodyPage = styled(View)`
  padding: 3% 2%;
`;

export const TitleContainer = styled(Text)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;