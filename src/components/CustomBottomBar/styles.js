import styled from "styled-components/native"
import { RFValue } from 'react-native-responsive-fontsize'
import { getBottomSpace } from "react-native-iphone-x-helper"

export const Tab = styled.View`
    height: ${RFValue(60)+getBottomSpace()}px;
    width: 100%;
    background-color: #FFF;
    flex-direction: row;
    position: absolute;
    align-self: center;
    align-items: center;
    justify-content: space-around;
    border-top-left-radius: ${RFValue(25)}px;
    border-top-right-radius: ${RFValue(25)}px;
    bottom: 0px;
    padding-bottom: ${getBottomSpace()}px;
`

export const Content = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
` 

export const ContentCenter = styled.TouchableOpacity`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 5px solid black;
    margin-top: -20px;
`

export const AvatarIcon = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 12px;
`