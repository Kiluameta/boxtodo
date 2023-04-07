import React, { useState, useCallback, useEffect } from 'react'
import { Platform, Text, View, useWindowDimensions, Image, BackHandler } from 'react-native'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { RFValue } from 'react-native-responsive-fontsize'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage'

import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import {
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans'

import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { Host } from 'react-native-portalize'
import { GlobalProvider } from './src/globals/context'

//STYLES
import theme from './src/globals/styles/theme'

import * as ScreenOrientation from 'expo-screen-orientation'

import * as Device from 'expo-device'

//INITIAL
import { DashboardRoutes } from './src/routes/dashboard'

NavigationContainer;
export default function App() {

  const [appIsReady, setAppIsReady] = useState(false)

  const toastConfig = {
    Success: ({value}) => {
      <View>
        <Text>{value}</Text>
      </View>
    }
  }

  useEffect(() => {
    (async () => {
      try{
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({
          OpenSans_300Light,
          OpenSans_400Regular,
          OpenSans_500Medium,
          OpenSans_600SemiBold,
          OpenSans_700Bold
        })
        console.log('Carregou as Fontes')
        setAppIsReady(true)
      } catch {
        console.log('Não Carregou as Fontes')
      }
    })()
  },[])

  const onLayout = useCallback(() => {
    if (appIsReady){
      SplashScreen.hideAsync()
    }
  },[appIsReady])

  if (!appIsReady){
    return null
  }else {
    return (
      <GlobalProvider>
        <ThemeProvider theme={theme} >
          <NavigationContainer>
            <Host>
              <StatusBar style='dark' />
              <View
                style={{flex: 1}}
                onLayout={onLayout}
              >
                {/* INITIAL */}
                <DashboardRoutes/>
                <Toast config={toastConfig} />
              </View>
            </Host>
          </NavigationContainer>
        </ThemeProvider>
      </GlobalProvider>
    )
  }
}

