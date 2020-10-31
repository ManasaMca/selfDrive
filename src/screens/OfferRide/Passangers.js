import React, { memo, useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import Styles from '../../stylesheet/button';
import styles from './PassangerStyles';
//import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';

const Passangers = () => {
  const navigation = useNavigation();


  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, marginBottom: 100 }}>
            <View
              style={[styles.header]}>
              <View style={[styles.backbtn]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image source={AppConstants.Cancel} alt="" />
                </TouchableOpacity>
              </View>
              <View style={[styles.logoView]}>
                <Text>
                  Logo
             </Text>
              </View>
            </View>
            <View>

              <Text style={[styles.text2]}>
                When are you going?
          </Text>
            </View>
            <View>

            </View>
            <View style={[styles.lineView]} />
            <View>
              <Text
                style={[styles.text3]}>
                What date do you want car?
          </Text>
            </View>

            <View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 50 }}>
              <View style={{ height: 50, width: 120, backgroundColor: 'grey', borderRadius: 10 }}>
                <Text style={{ color: 'white', marginTop: 15, alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}> Upto 4 Seat</Text>
              </View>
              <View style={{ height: 50, width: 120, backgroundColor: 'grey', borderRadius: 10 }}>
                <Text style={{ color: 'white', marginTop: 15, alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}> Above 4 Seat</Text>
              </View>


              <View style={[styles.nextView]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('OfferRide')}

                >
                  <Image source={AppConstants.Next} alt="" />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default memo(Passangers);
