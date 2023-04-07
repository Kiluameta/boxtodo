import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  margin-bottom: ${getBottomSpace() + RFValue(60)}px;
`;

export const Content = styled.View`
  margin: 0px ${RFValue(35)}px;
`

export const Card = styled.View`
  background-color: white;
  border-radius: ${RFValue(15)}px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: ${RFValue(30)}px 0px;

  ${({ item }) =>
    item &&
    css`
      margin: 10px 0px;
      padding: 15px 20px;
      flex-direction: row;
      align-items: center;
    `}
`

export const CardText = styled.Text`
  color: ${({ theme }) => theme.colors.pimary};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-left: ${RFValue(10)}px;

  ${({ percent }) =>
    percent &&
    css`
      opacity: 0.8;
      font-size: ${RFValue(16)}px;
      font-family: ${({ theme }) => theme.fonts.regular};
      margin-left: 0px;
    `}

  ${({ percentSubtitle }) =>
    percentSubtitle &&
    css`
      opacity: 0.8;
      font-size: ${RFValue(14)}px;
      font-family: ${({ theme }) => theme.fonts.light};
      margin-top: 6px;
      margin-left: 0px;
    `}
`

export const TextContainer = styled.View``;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.pimary};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-bottom: 10px;
`
