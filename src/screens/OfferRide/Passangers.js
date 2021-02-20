import React, { memo, useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import Styles from '../../stylesheet/button';
import styles from './PassangerStyles';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';

const Passangers = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date())


  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <SafeAreaView style={{alignContent:'center'}}>
        <ScrollView >
         
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
            <DatePicker
              androidVariant="nativeAndroid"
              date={date}
              mode="date"
              onDateChange={setDate}
              color={colors.themeColor}
            />
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
              <DatePicker
                androidVariant="nativeAndroid"
                date={date}
                mode="date"
                onDateChange={setDate}
                color={colors.themeColor}
              />
            </View>
            <View style={[styles.lineView]} />
            <View style={{ flexDirection: 'row' ,marginBottom:100}}>
              <View>
                <View style={styles.view_1}>
                <View  style={{margin:10}}>
                    <TouchableOpacity style={styles.seats1}> 
                    <Text style={styles.text4}>  4 Seat</Text>
                    </TouchableOpacity>
                  </View>
                  <View  style={{margin:10}}>
                    <TouchableOpacity style={styles.seats1}> 
                    <Text style={styles.text4}>  7 Seat</Text>
                    </TouchableOpacity>
                  </View>
                </View>
               
                <View  style={{margin:10}}>
                    <TouchableOpacity style={styles.seats1}> 
                    <Text style={styles.text4}>  Above 7 Seat</Text>
                    </TouchableOpacity>
                  </View>
              </View>
          
            <View style={[styles.nextView]}>
              <TouchableOpacity
                onPress={() => navigation.navigate('OfferRide')} >
                <Image source={AppConstants.Next} alt="" />
              </TouchableOpacity>
            </View>
            </View>

        
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default memo(Passangers);
