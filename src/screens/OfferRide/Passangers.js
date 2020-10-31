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

            <View style={styles.view_1}>
            <View style={styles.seats1}>
                <Text style={styles.text4}> Upto 4 Seat</Text>
              </View>
              <View style={styles.seats1}>
                <Text style={[styles.text4]}> Above 4 Seat</Text>
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
