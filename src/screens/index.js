
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

import Passangers from './OfferRide/Passangers';
import OfferRide from './OfferRide/OfferRide';
// import RegisteredCars from './OfferRide/RegisteredCars';
import OTPVerification from './GetRide/OTPVerification';
// import splashscreen from './GetRide/splashScreen';
import Home from './GetRide/Home';
import UserSignUp from "./GetRide/UserSignUp";
import Registercar from "./GetRide/RegisterCar";
import UserProfile from "./GetRide/UserProfile";
import Cardetails from "./GetRide/cardetails";
import AvailableCars from "./OfferRide/availablecars";
import { heightPercentageToDP, responsiveHorizontalSize, responsiveVerticalSize, } from '../stylesheet/responsiveSize';



const MainTab = createBottomTabNavigator();

const MainStack = createStackNavigator();

const OnClick = () => BackHandler.exitApp();

const tabBarIcons = [AppConstants.Home, AppConstants.profile, AppConstants.Exit];

const BottomCenterView = (props) => {
  const { color, size, title, imageName, iconName, containerStyle,
    innerContainer, iconImageSize, numberOfTabs } = props;
  return <TouchableOpacity
    style={[{
      //width:65,
      height: 70,
      justifyContent: 'center',
      borderWidth: 0,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'center'
    }, { ...innerContainer }, { width: wp('100%') / numberOfTabs }]}
    onPress={props.onPress}
    onLongPress={props.onLongPress}
  >
    <Image source={iconName} alt="" />

  </TouchableOpacity>
}

function CustomTabBar({ state, descriptors, navigation }) {

  return (
    <View style={{
      flexDirection: 'row',
      borderTopEndRadius: 35,
      borderTopStartRadius: 35,
      width: '100%',
      height: '9%',
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'white',
      shadowColor: 'grey',
    }}>
      {

        state.routes.map((route, index) => {
          // console.log(route)
          //  console.log(index)

          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
          const iconName = tabBarIcons[index];
          const isFocused = state.index === index;



          const onPress = async () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            navigation.navigate(route.name, { inital: 0 });
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (<BottomCenterView
            color={isFocused ? colors.white : colors.lightGrey}
            iconImageSize={50}
            title={""}
            iconName={iconName}
            onPress={onPress}
            onLongPress={onLongPress}
            numberOfTabs={state.routes.length - 3}
          >
          </BottomCenterView>)
        })}
    </View>
  );
}


export const TabsContainer = (props) => {
  return <MainTab.Navigator
    tabBar={props => <CustomTabBar  {...props} />}
    tabBarOptions={{
      keyboardHidesTabBar: true,
      activeTintColor: colors.themeColor,
      inactiveTintColor: colors.white,
      labelStyle: {
        color: colors.white,
        fontSize: 14,
      },
      style: {
        backgroundColor: colors.themeColor,
        shadowColor: "rgba(0, 0, 0, 0.19)",
        shadowOffset: {
          width: 0,
          height: 6
        },
        shadowRadius: 30,
        elevation: 5,
        shadowOpacity: 1,
        height: 60
      },
      tabStyle: {
        alignItems: "center",
        justifyContent: 'center',
        paddingVertical: responsiveVerticalSize(0.5),
        paddingHorizontal: responsiveHorizontalSize(0.5),
        backgroundColor: colors.themeColor,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }
    }}
    initialRouteName={"Home"}>
    <MainTab.Screen
      name={'Home'}
      component={Home}
    />
   
    <MainTab.Screen
      name={'UserProfile'}
      component={UserProfile}
    />
    <MainTab.Screen
      name={'OnClick'}
      component={OnClick}
    />

    <MainTab.Screen
      name={'Passangers'}
      component={Passangers}
    />

    
    <MainTab.Screen
      name={"OfferRide"}
      component={OfferRide}

    />
    <MainTab.Screen
      name={"AvailableCars"}
      component={AvailableCars}
    />
   
  </MainTab.Navigator>

}




export default function RootStack() {
  return <NavigationContainer>
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true
      }}>
      {/* <MainStack.Screen name={'splashscreen'}
        component={splashscreen} /> */}
      <MainStack.Screen name={'Login'}
        component={Login} />
      <MainStack.Screen name={'OTPVerification'}
        component={OTPVerification} />
      <MainStack.Screen name={'Registercar'}
        component={Registercar} />
         <MainStack.Screen name={'Cardetails'}
        component={Cardetails} />
      <MainStack.Screen name={'UserSignUp'}
        component={UserSignUp} />
      <MainStack.Screen name={'OfferRideTab'}
        component={TabsContainer} />
     
    </MainStack.Navigator>
  </NavigationContainer>

}

