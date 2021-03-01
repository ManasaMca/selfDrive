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

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const fetchUserData = async () => {
    let userToken = await getUser()
    const userdata = userToken.data[0]
    console.log(userdata)
    const ppcode = userdata.pcode
    console.log("////////////////",userdata.pcode)
    dispatch(
        users_fetch_action({
            userdata
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
        <View style={{marginBottom:75}}>
        <View style={[styles.flex_row]} >
         
         <View style={ [styles.logoView] }>
                      
                 <Text>
                     Logo
                  </Text>
           </View>
       
        </View>
        <View style={[styles.lineView]} />
      
        <View style={[styles.titleView]}>
          <Text style={[styles.text1]}>
            You're looking for...
          </Text>
          <TouchableOpacity  style={[styles.btn]}
             onPress={() => navigation.navigate('Selection')}
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
              onPress={() => navigation.navigate('PostCar')}
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
        </View>
      </ScrollView>
       
      </SafeAreaView>
    </>
  );
};

export default memo(Home);