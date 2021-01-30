import React, { Component, memo, useEffect } from 'react';
import { View, StyleSheet, Image,Text, AppRegistry } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { isNullOrUndefined } from 'util';
import { AppConstants } from '../../constants/appconstants';
import { doGetProfileRequest, doProfileOtpRequest, doGetProfileRequestSuccess } from '../../state/actions';
import { getMobileNumber } from '../../utils/AsyncStorageHelper';
import { connect, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import colors from '../../stylesheet/colors';
import { getProfileAPI } from '../../state/api';

//            dispatch(doProfileOtpRequest(data));

const splashscreen = (props) => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const onUserLogin = async () => {
    const mobile = await getMobileNumber();
    console.log("mobile :- ", mobile);
    const data = {
      mobile: mobile,
    };

    if(!isNullOrUndefined(mobile)){
      //dispatch(doGetProfileRequest(data));

      // const res = await getProfileAPI(data);
      //alert(JSON.stringify(res));
      // props.doGetProfileRequestSuccess(res)
      setTimeout(() => {
        navigation.replace('OfferRideTab', {
          params: {
          
          },
          screen: 'SignUp'
        });
  
      }, 2000);


    }else {
      setTimeout(() => {
      //  this.props.navigation.navigate('Rewards')
        navigation.replace('Login');
        //INP200820200832505
  
      }, 4000);
    }
   
  }
  // console.log("props.loginData :- ",  props);
  // if(props.loginData){
    
  // }

  useEffect(() => {
    onUserLogin()
    return () => {
      
    }
  }, [])
  
  return  (
    <View style={ styles.container }>
      <Animatable.View
        animation="zoomIn"
        duration={ 4000 }
        useNativeDriver={ true }
        direction="alternate">
            <Image source={ AppConstants.splashLogo } />
          
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
});


const mapDispatchToProps = (dispatch) => {
  return {
    doGetProfileRequestSuccess: (data) => dispatch(doGetProfileRequestSuccess(data)),
  };
};

export default  connect(mapDispatchToProps)(splashscreen);