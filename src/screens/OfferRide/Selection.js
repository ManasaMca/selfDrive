import React, { memo, useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import Styles from '../../stylesheet/button';
import styles from './SelectionStyles';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';
import DateHelper from '../../utils/DateHelper';
import { Picker } from '@react-native-community/picker';
import { heightPercentageToDP, widthPercentageToDP } from '../../stylesheet/responsiveSize';


const Selection = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date())
  const [seating, setseating] = useState('');


  const today = new Date();
  const currentDate =
    today.getFullYear() +
    '-' +
    (today.getMonth() < 10 ? '0' + today.getMonth() : today.getMonth()) +
    '-' +
    (today.getDate() < 10 ? '0' + today.getDate() : today.getDate());


 const onsubmit=()=>{
  if (date == '' || seating == '') {
    alert("Enter All Values")
  }
  else {
  navigation.navigate('OfferRide',{seating:seating,date:date})
  }
 }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <SafeAreaView style={{ alignContent: 'center' }}>
        <ScrollView >
          <View style={{width:widthPercentageToDP('100%'),height:heightPercentageToDP('100%')}}> 

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
              When You Need Car ?
              </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <DatePicker
              androidVariant="nativeAndroid"
              date={date}
              mode="date"
              minimumDate={new Date()}
              onDateChange={setDate}
              color={colors.themeColor}
            />
          </View>
          <View style={[styles.lineView]} />

          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Text style={[styles.text2]}>
              Seating
              </Text>
            <View style={[styles.container]}>
              <Picker
                mode="dropdown"
                style={{ width: 200 }}
                selectedValue={seating}
                onValueChange={value => setseating(value)}

              >
                <Picker.Item label="Select Seats" value="Seat" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="10+" value="10+" />

              </Picker>
            </View>
          </View>
          <View style={[styles.nextView]}>
            <TouchableOpacity
            style={[styles.btn]}
              onPress={() => onsubmit()} >
             <Text style={[styles.btnText]}> Next</Text>
            </TouchableOpacity>
          </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default memo(Selection);
