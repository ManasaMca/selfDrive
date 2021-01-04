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
          <View style={styles.v3}>
            <Text style={[styles.text1, { flex: 1 }]}>Find Car</Text>

          </View>

        </View>
        <View style={styles.mm}>

        </View>


        <View style={styles.carview}>

          <View style={styles.carview2}>
            <Text style={styles.t1}>Rahul Sharma</Text>
            <View style={styles.v2}>
              <Image source={require('../../assets/image8.png')} style={styles.image1} />
              <Image source={require('../../assets/Vector.png')} style={styles.image2} />
            </View>
          </View>

          <View style={styles.carview2}>
            <Text style={styles.t1}>Rapid tech</Text>
            <View style={styles.v2}>
              <Image source={require('../../assets/image8.png')} style={styles.image1} />
              <Image source={require('../../assets/Vector.png')} style={styles.image2} />
            </View>
          </View>

          <View style={styles.carview2}>
            <Text style={styles.t1}>Mahesh</Text>
            <View style={styles.v2}>
              <Image source={require('../../assets/image8.png')} style={styles.image1} />
              <Image source={require('../../assets/Vector.png')} style={styles.image2} />
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
