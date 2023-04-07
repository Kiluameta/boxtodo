import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${getStatusBarHeight() + RFValue(50)}px;
  margin: 0 ${RFValue(35)}px;
  align-items: flex-start;
`;

export const TextContainer = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.pimary};
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.pimary};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const People = styled.Image``;