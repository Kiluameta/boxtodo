import React, { useState, useEffect } from "react"
import {
    View,
    Animated,
    useWindowDimensions,
    StyleSheet
} from 'react-native'
import { Tab, Content, ContentCenter } from "./styles"
import { RFValue } from "react-native-responsive-fontsize"
import { Ionicons } from "@expo/vector-icons"

import Home from '../../assets/Menu/home.svg'
import theme from "../../globals/styles/theme"

export function CustomBottomBar({state, navigation}){

    const send = (Name) => {
        navigation.navigate(Name)
    }

    const [translateX] = useState(new Animated.Value(0))
    const [translateYH] = useState(new Animated.Value(0))
    const [translateYT] = useState(new Animated.Value(0))
    const [translateYS] = useState(new Animated.Value(0))

    const window = useWindowDimensions()

    const TAB_BAR_WIDTH = window.width
    const TAB_WIDTH = TAB_BAR_WIDTH/3

    const translated = (index) => {
        Animated.spring(translateX, {
            toValue: index * TAB_WIDTH,
            useNativeDriver: true,
        }).start() 
    }

    const translateIcon = (val) => {
        Animated.spring(translateYH, {
            toValue: state.index === 0 ? val : 0,
            useNativeDriver: true
        }).start()
        Animated.spring(translateYT, {
            toValue: state.index === 1 ? val : 0,
            useNativeDriver: true
        }).start()
        Animated.spring(translateYS, {
            toValue: state.index === 2 ? val : 0,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        translated(state.index)
        translateIcon(-20)
    }, [state.index])

    return (
        <View>
            
            <Tab>
                <View style={styles.slidingTabContainer} >
                    <Animated.View style={[styles.slidingTab, {transform:[{translateX}]}]} />
                </View>

                <Animated.View style={{transform: [{translateY: translateYH}]}} >
                    <Content onPress={() => send('Início')} >
                        <Ionicons name={state.index === 0 ? 'ios-home' : 'ios-home-outline'} 
                            style={{opacity: state.index === 0 ? 1 : 0.7}} size={32} color='#2c2c2c' /> 
                    </Content>
                </Animated.View>


                <Animated.View style={{transform: [{translateY: translateYT}]}} >
                    <Content onPress={() => send('Tarefas')} >
                        <Ionicons name={state.index === 1 ? 'ios-list-circle' : 'ios-list-circle-outline'} 
                            style={{opacity: state.index === 1 ? 1 : 0.7}} size={34} color='#2c2c2c' />  
                    </Content>
                </Animated.View>


                <Animated.View style={{transform: [{translateY: translateYS}]}} >
                    <Content onPress={() => send('Ajustes')} >
                        <Ionicons name={state.index === 2 ? 'ios-settings' : 'ios-settings-outline'} 
                            style={{opacity: state.index === 2 ? 1 : 0.7}} size={32} color='#2c2c2c' />  
                    </Content>
                </Animated.View>
            
            </Tab>
        </View>
    )

} 

const styles = StyleSheet.create({
    slidingTabContainer: {
        width: '33,33%',
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
    },
    slidingTab: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#DEE9FD',
        bottom: 25,
        borderWidth: 4,
        borderColor: theme.colors.shape
    }
})