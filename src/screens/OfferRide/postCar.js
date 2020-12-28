import React, { memo, useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, CheckBox } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import Styles from '../../stylesheet/button';
import styles from './postStyles';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';

const PostCar = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date())

  const [isSelected, setSelection] = useState(false);

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
                Posting car on
              </Text>
            </View>
            <DatePicker
              androidVariant="nativeAndroid"
              date={date}
              mode="date"
              onDateChange={setDate}
              color={colors.themeColor}
            />

            <View style={[styles.lineView]} />

            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <Text style={[styles.text2]}>
                Select a Car
              </Text>
              <View style={[styles.container]}>

              </View>
            </View>
            <View>

              <Text style={[styles.text2]}>
                Driver Facility
              </Text>
              <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                <CheckBox
                  color={colors.themeColor}
                  value={isSelected}
                  onValueChange={setSelection}
                /><Text style={{ top: 5 }}>Negotiable</Text>
              </View>
            </View>
            <View style={styles.view_1}>
              {/* <View style={[styles.nextView]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('OfferRide')} >
                  <Image source={AppConstants.Next} alt="" />
                </TouchableOpacity>
              </View> */}
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default memo(PostCar);
