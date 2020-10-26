import React, { memo, useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, } from 'react-native';
import buttonStyles from '../../stylesheet/button';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import Styles from '../../stylesheet/button';
import styles from './PassangerStyles';
import DatePicker from 'react-native-date-picker';
import DateHelper from '../../utils/DateHelper';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast'

const Passangers = () => {
  const navigation = useNavigation();
  // const today = new Date();
  // const currentDate =
  //   today.getFullYear() +
  //   '-' +
  //   (today.getMonth() < 10 ? '0' + today.getMonth() : today.getMonth()) +
  //   '-' +
  //   (today.getDate() < 10 ? '0' + today.getDate() : today.getDate());
  // //const [selected, setSelected] = useState(currentDate);
  // //const [selectedHours, setSelectedHours] = useState(0);
  // //const [selectedMinutes, setSelectedMinutes] = useState(0);
  // const [price, setPrice] = useState(0);
  // const [date, setDate] = useState(new Date());
  // const [expectedTime, setExpectedDate] = useState(new Date());


  // const onDayPress = (day) => {
  //   setSelected(day.dateString);
  // };

  // const handleOfferRide = () => {
  //   if (count == 0) {
  //     Toast.show('Please select the Number of Seats ', Toast.SHORT);
  //     return;
  //   }
  //   if (price == 0) {
  //     Toast.show('Please enter the price', Toast.SHORT);
  //     return;
  //   }
  //   if (date >= expectedTime) {
  //     Toast.show('Expected Reach time should be greater than Pickup time', Toast.SHORT);
  //     return;
  //   }


  // const startDateTime = DateHelper.formatToYYYYMMDDHHMM(date.toISOString());
  // const endDateTime = DateHelper.formatToYYYYMMDDHHMM(expectedTime.toISOString());


  // const passengers = count;
  // navigation.navigate('OfferRideTab', {
  //   params: {
  //     date: startDateTime,
  //     endTime: endDateTime,
  //     passengers,
  //     price,
  //   },
  //   screen: 'OfferRide'
  // });
  // };

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
                {/* <Image source={AppConstants.WhiteLogo} style={{ width: 50, height: 50 }} alt="" /> */}
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
              <DatePicker
                androidVariant="nativeAndroid"
                textColor={colors.themeColor}
              // date={date}
              // minimumDate={new Date()}
              // onDateChange={setDate}
              />
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
                textColor={colors.themeColor}
              // date={expectedTime}
              // minimumDate={new Date()}
              // onDateChange={setExpectedDate}
              />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', top:50}}>
              <View style={{ height: 50, width: 120, backgroundColor: 'grey', borderRadius: 10 }}>
                <Text style={{color:'white',marginTop:15,alignSelf:'center',  fontSize:15, fontWeight:'bold'}}> Upto 4 Seat</Text>
              </View>
              <View style={{ height: 50, width: 120, backgroundColor: 'grey', borderRadius: 10 }}>
              <Text style={{color:'white', marginTop:15,alignSelf:'center', fontSize:15, fontWeight:'bold'}}> Above 4 Seat</Text>
              </View>
              {/* <View style={[styles.lineView]} /> */}

              <View style={[styles.nextView]}>
                <TouchableOpacity
                  //onPress={() => handleOfferRide()}
                  onPress={() => navigation.navigate('OfferRide')}>
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
