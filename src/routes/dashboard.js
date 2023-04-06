import React from 'react'
import { 
    Platform,
    View
} from 'react-native'
import theme from '../globals/styles/theme'
import { RFValue } from 'react-native-responsive-fontsize'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getBottomSpace } from 'react-native-iphone-x-helper'

const { Navigator, Screen } = createBottomTabNavigator()

// SCREENS
import { Start } from '../pages/Main/start'
import { Tasks } from '../pages/Main/tasks'
import { Settings } from '../pages/Main/settings'

import { CustomBottomBar } from '../components/CustomBottomBar'

import { useUser } from '../globals/context'

export function DashboardRoutes() {

    const { loading, modalLoading } = useUser()

    

    return(
        <View style={{flex: 1}} >
            <Navigator tabBar={props=><CustomBottomBar {...props}  />} >
                <Screen name='Início' component={Start} options={{headerShown: false}} />
                <Screen name='Tarefas' component={Tasks} options={{headerShown: false}} />
                <Screen name='Ajustes' component={Settings} options={{headerShown: false}} />
            </Navigator>
        </View>
    )
    
}