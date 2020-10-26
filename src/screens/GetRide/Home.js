import React, { memo, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text,Dimensions, Image,BackHandler, TouchableOpacity, Button, ScrollView, } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import styles from './HomeStyles';
// import { connect, useDispatch } from 'react-redux';
// import { doGetProfileRequest } from '../../state/actions';
// import { getMobileNumber } from '../../utils/AsyncStorageHelper';

const { width, height } = Dimensions.get("screen");
const Home = ({ navigation }) => {
 //const dispatch = useDispatch();

 // const fetchUserData = async() => {
   // const mobile = await getMobileNumber();
   // console.log("mobile :- ", mobile);
   // const data = {
    //  mobile: mobile,
    //};
   // dispatch(doGetProfileRequest(data));
  //}

 // useEffect(() => {
 //   fetchUserData();
//  }, []) 

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView backgroundColor={colors.white} >
      <ScrollView>
        <View style={{marginBottom:75}}>
        <View style={[styles.flex_row]} >
         <View style={[styles.pv1]}>
            <TouchableOpacity
             // onPress={() =>  BackHandler.exitApp()}
             >
              <Image source={AppConstants.BackArrow} alt="" />
            </TouchableOpacity>
          </View>
         <View style={ [styles.logoView] }>
                        {/* <Image source={ AppConstants.LogoMedium } alt="" /> */}
                        <Text>
                            Logo
                        </Text>
                    </View>
        {/*  <View style={[styles.logoutView]}>
            <TouchableOpacity onPress={() => BackHandler.exitApp()}
            >
              <Text style={[styles.logoutBtnText]}>
               Exit
              </Text>
            </TouchableOpacity>
        </View> */}
        </View>
        <View style={[styles.lineView]} />
      
        <View style={[styles.titleView]}>
          <Text style={[styles.text1]}>
            You're looking for...
          </Text>
          <TouchableOpacity  style={[styles.btn]}
             onPress={() => navigation.navigate('Passangers')}
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
              onPress={() => navigation.navigate('Registercar')}
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