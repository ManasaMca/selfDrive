import React, { memo, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text,Dimensions, Image,BackHandler, TouchableOpacity, Button, ScrollView, } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import styles from './HomeStyles';
const { width, height } = Dimensions.get("screen");
import AsyncStorage from '@react-native-community/async-storage';
import {users_fetch_action} from '../../Redux/action/useraction';
import {car_fetch_action} from '../../Redux/action/caraction';
import {useSelector, useDispatch} from 'react-redux';
import { getUser } from '../../utils/AsyncStorageHelper'
import { pcode } from '../../Redux/selector/userselector';

import * as Animatable from 'react-native-animatable';

const Home = ({ navigation }) => {
  
  const [pcode,setpcode]=useState();
  const dispatch = useDispatch();
  const fetchUserData = async () => {
    let userDetails = await getUser()
    
    console.log(userDetails)
    const ppcode = userDetails.pcode
    setpcode(ppcode);
    console.log("////////////////",userDetails.pcode)
    dispatch(
        users_fetch_action({
          userDetails
        }),
      );
      dispatch(
        car_fetch_action({
            ppcode
        }),
      );

  }

  useEffect(() => {
    fetchUserData();
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView backgroundColor={colors.white} >
      <ScrollView>
        <View style={{marginBottom:75,backgroundColor:'white'}}>
       
         <View style={ [styles.logoView] }>
                      
          <Image
                source={require('../../assets/Ryder.png')}
                style={{width:50,height:50,borderRadius:50}}
            />
           </View>
       
        <View style={[styles.lineView]} />
        <Animatable.View
        animation='bounceInUp'
        duration={2000}
        useNativeDriver={true}
        direction="alternate"
    >
        <View style={[styles.titleView]}>
          <Text style={[styles.text1]}>
            You're looking for...
          </Text>
          <TouchableOpacity  style={[styles.btn]}
             onPress={() => navigation.navigate('OfferRide',{pcode:pcode})}
            >
          <View style={{paddingTop:20}}>
          <Image source={require('../../assets/Getaride.jpeg')} style={{width:130,height:130,}}/>
          </View>
          <View style={{paddingTop:10}}>
              <Text style={[styles.btnText]}>
                Get A Car
              </Text>
          </View>
          <View style={ [styles.text2View]}>
            <Text style={[styles.text2]}>
           Want to go with a car by your own driving ..please select a car
            
            </Text>
          </View>
          </TouchableOpacity>  
        <View style={[styles.lineView2]} />
        <TouchableOpacity  style={[styles.btn]}
              onPress={() => navigation.navigate('Registercar', {ppcode:pcode})}
            >
        <View style={{paddingTop:20}}>
          <Image source={require('../../assets/Bookaride.jpeg')} style={{width:120,height:120,}} />
          </View>
          <View style={{paddingTop:10}}>
           
              <Text style={[styles.btnText]}>
              Post A Car
              </Text>
           
          </View>
          <View style={ [styles.text2View]}>
            <Text style={[styles.text2]}>
            if you're intrested to offer your car for 
            self drive then please post a car
            </Text>
          </View>
          </TouchableOpacity>
        </View>  
        </Animatable.View>
        </View>
      </ScrollView>
       
      </SafeAreaView>
    </>
  );
};

export default memo(Home);