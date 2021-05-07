
import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Image, TouchableOpacity, Alert, Dimensions, BackHandler } from 'react-native';
import { NavigationContainer, DrawerActions, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../stylesheet/colors';
import Login from './GetRide/login';
import { AppConstants } from '../constants/appconstants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';

import Selection from './OfferRide/Selection';
import OfferRide from './OfferRide/OfferRide';
import PostCar from './OfferRide/postCar'
import OTPVerification from './GetRide/OTPVerification';
import splashscreen from './GetRide/splashScreen';
import Home from './GetRide/Home';
import More from './OfferRide/More';
import TermsConditions from './GetRide/Terms'
import UserSignUp from "./GetRide/UserSignUp";
import Registercar from "./GetRide/RegisterCar";
import UserProfile from "./GetRide/UserProfile";
import Cardetails from "./GetRide/cardetails";
import Support from './GetRide/Support';
import AvailableCars from "./OfferRide/availablecars";
import PostCarFinal from './OfferRide/PostCarFinal';
import { heightPercentageToDP, responsiveHorizontalSize, responsiveVerticalSize, } from '../stylesheet/responsiveSize';
import LocationSearch from './GetRide/LocationSearch';

import MyCars from './GetRide/MyCars'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const MoreStack = createStackNavigator();

const MainStack = createStackNavigator();

const OnClick = () => BackHandler.exitApp();


const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
      keyboardHidesTabBar: true
    }}
  >

    <HomeStack.Screen name={'Home'} component={Home} />
    <HomeStack.Screen name={'Selection'} component={Selection} />
    <HomeStack.Screen name={'PostCar'} component={PostCar} />
    <HomeStack.Screen name={"PostCarFinal"} component={PostCarFinal} />
    <HomeStack.Screen name={"OfferRide"} component={OfferRide} />
    <HomeStack.Screen name={"AvailableCars"} component={AvailableCars} />
    <HomeStack.Screen name={"MyCars"} component={MyCars} />

  </HomeStack.Navigator>
);


const MoreStackScreen = ({ navigation }) => (
  <MoreStack.Navigator
    screenOptions={{
      headerShown: false,
      keyboardHidesTabBar: true
    }}
  >

    <MoreStack.Screen name={'More'} component={More} />
    <MoreStack.Screen name={'Support'} component={Support} />

  </MoreStack.Navigator>
);


export const TabsContainer = (props) => {

  return <Tab.Navigator
    screenOptions={{
      headerShown: false,
      keyboardHidesTabBar: true
    }}
    tabBarOptions={{
      //  activeBackgroundColor: colors.themeColor,
      activeTintColor: colors.themeColor,
      inactiveTintColor: 'black',
      style: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        elevation: 5,
      },
      labelStyle: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.themeColor,
        fontFamily: 'Roboto-Regular'
      }
    }}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarIcon: ({ }) => (
          <Icon
            name={'home'}
            size={20}

            style={{
              color: colors.themeColor,
              // width: 17,
              // height: 17,
              tintColor: '#000000',
              opacity: 100,
            }}
          />
        ),
      }}
    />


    <Tab.Screen
      name={'Profile'}
      component={UserProfile}
      options={{
        tabBarIcon: ({ }) => (
          <Icon
            name={'user'}
            size={20}

            style={{

              color: colors.themeColor,
              // width: 17,
              // height: 17,
              tintColor: '#000000',
              opacity: 100,
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name={'More'}
      component={MoreStackScreen}
      options={{
        tabBarIcon: ({ }) => (
          <MaterialIcons
            name={'more-horiz'}
            size={20}

            style={{

              color: colors.themeColor,
              // width: 17,
              // height: 17,
              tintColor: '#000000',
              opacity: 100,
            }}
          />
        ),
      }}
    />
  </Tab.Navigator>
}


export default function RootStack() {
  return <NavigationContainer>
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true
      }}>
      <MainStack.Screen name={'splashscreen'}
        component={splashscreen} />
      <MainStack.Screen name={'Login'}
        component={Login} />
      <MainStack.Screen name={'OTPVerification'}
        component={OTPVerification} />
      <MainStack.Screen name={'OfferRideTab'}
        component={TabsContainer} />
      <MainStack.Screen name={'Registercar'}
        component={Registercar} />
      <MainStack.Screen name={'Cardetails'}
        component={Cardetails} />
      <MainStack.Screen name={'SignUp'}
        component={UserSignUp} />
      <MainStack.Screen name={'LocationSearch'}
        component={LocationSearch} />
      <MainStack.Screen name={'TermsConditions'}
        component={TermsConditions} />
    </MainStack.Navigator>
  </NavigationContainer>

}

