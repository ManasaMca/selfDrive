import React, { memo, useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import styles from './OfferRideStyles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, responsiveFontSize } from '../../stylesheet/responsiveSize';

const OfferRide = (props) => {
  const navigation = useNavigation();


  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.lightWhite} />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={[{
            flex: 1,
            width: '100%',
            padding: 10,
            position: 'absolute',
            top: 10,
            zIndex: 5,
          }]}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <Text style={[styles.text1, { flex: 1 }]}>Find Car</Text>

          </View>
        </View>
        <View style={{ width: '100%', height: heightPercentageToDP('100%') -30,justifyContent:'center' }}>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Map View</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', bottom: 50 }}>
          <View style={{ width: 100, height: 70, backgroundColor: 'white', bottom: 100, borderRadius: 10 }}>
            <Text style={{ margin: 5, fontWeight: 'bold' }}>Rahul Sharma</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/image8.png')} style={{ height: 30, width: 60 }} />
              <Image source={require('../../assets/Vector.png')} style={{ height: 20, width: 20, top: 10 }} />
            </View>
          </View>
          <View style={{ width: 100, height: 70, backgroundColor: 'white', bottom: 100, borderRadius: 10 }}>
            <Text style={{ margin: 5, fontWeight: 'bold' }}>Rapid tech</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/image8.png')} style={{ height: 30, width: 60 }} />
              <Image source={require('../../assets/Vector.png')} style={{ height: 20, width: 20, top: 10 }} />
            </View>
          </View>
          <View style={{ width: 100, height: 70, backgroundColor: 'white', bottom: 100, borderRadius: 10 }}>
            <Text style={{ margin: 5, fontWeight: 'bold' }}>Mahesh</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/image8.png')} style={{ height: 30, width: 60 }} />
              <Image source={require('../../assets/Vector.png')} style={{ height: 20, width: 20, top: 10 }} />
            </View>
          </View>

          <View style={{ bottom: 90 }}>
            <TouchableOpacity
              //  onPress={() => navigateToRegisteredCars()}
              onPress={() => navigation.navigate('AvailableCars')}
            >
              <Image source={AppConstants.Next} alt="" />
            </TouchableOpacity>
          </View>


        </View>

      </SafeAreaView>
    </>
  );
};

export default memo(OfferRide);
