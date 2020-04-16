import React from 'react'
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import CalculateScreen from '../screen/CalculateScreen'
import MapScreen from '../screen/MapScreen'
import Colors from '../constants/Colors'
import { Platform  } from 'react-native'

//npm install --save react-native-gesture-handler react-native-reanimated react-native-screens
//npm install --save @react-native-community/masked-view
//npm install react-native-safe-area-context
//npm install react-navigation-tabs
//npm install --save react-native-paper

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {

    },
    headerBackTitleStyle: {

    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    // headerTitle: 'A Screen',
    // headerMode: 'screen'
};

const testNavigator = createStackNavigator({
    Calculate: CalculateScreen,
    // HistoryPage: CalculateHistoryScreen,
},
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const MapNavigator = createStackNavigator({
    Map: MapScreen,
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {

    Calculate: {
        screen: testNavigator, navigationOptions: {
            tabBarLabel: 'Test',
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name='ios-calculator' size={25} color={tabInfo.tintColor} />);
            },
            tabBarColor: Colors.primaryColor,
        }
    },
    Favorites: {
        screen: MapNavigator
        , navigationOptions: {
            tabBarLabel: 'Map',
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name='ios-map' size={25} color={tabInfo.tintColor} />);
            },
            tabBarColor: Colors.accentColor
        }
    }
}

const calculateAndMapTabNavigation = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
        tabScreenConfig, {
        activeTintColor: 'white',
        shifting: false,
        barStyle: {
            backgroundColor: Colors.primaryColor,

        }
    }
    ) : createBottomTabNavigator(
        tabScreenConfig
        , {
            tabBarOptions: {
                activeTintColor: Colors.accentColor
            }
        });

export default createAppContainer(calculateAndMapTabNavigation);