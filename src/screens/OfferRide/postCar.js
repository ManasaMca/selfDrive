import React, { memo, useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, CheckBox } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import Styles from '../../stylesheet/button';
import styles from './postStyles';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';
import { pcode } from '../../Redux/selector/userselector';
import { carlist } from '../../Redux/selector/carselector';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Picker } from 'native-base';
import DateHelper from '../../utils/DateHelper';

const PostCar = () => {
  const navigation = useNavigation();
  const cars_list = useSelector(carlist);
  const ppcode = useSelector(pcode);
  const [date, setDate] = useState(new Date())
  const [car, setCar] = useState('');

  const [Driver, setDriver] = useState(false);

  const [Negotiable, setNegotiable] = useState(false);

  const today = new Date();
  const currentDate =
    today.getFullYear() +
    '-' +
    (today.getMonth() < 10 ? '0' + today.getMonth() : today.getMonth()) +
    '-' +
    (today.getDate() < 10 ? '0' + today.getDate() : today.getDate());


  const selectedDate = DateHelper.formatToYYYYMMDDHHMM(date.toISOString());


  const submit = () => {

    // console.log("log", ppcode, date, car, Driver, Negotiable)

    // if (date == '' || car == '') {
    //   alert("Enter All Values")
    // }
    // else {

    //   fetch('http://udrive.b2bmart.org.in/api/add-ride.php', {
    //     method: 'post',
    //     header: {
    //       'Accept': 'application/json',
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       pcode: ppcode,
    //       carid: car,
    //       driver_fecility: Driver,
    //       negotiable: Negotiable,
    //       r_date: date
    //     })

    //   })
    //     .then((response) => response.json())
    //     .then(async (response) => {
    //       const dataJSON = JSON.stringify(response)
    //       const userToken1 = JSON.parse(dataJSON);
    //       console.log('response', userToken1);

    //       alert(userToken1.Message)
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    navigation.navigate('PostCarFinal')

    //}

  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, marginBottom: 100 }}>
            <View style={[styles.header]}>
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
                Post Car On
              </Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <DatePicker
                androidVariant="nativeAndroid"
                date={date}
                mode="date"
                minimumDate={new Date()}
                onDateChange={(date) => {
                  //  console.log(date);
                  setDate(date);
                }}
                color={colors.themeColor}
              />
            </View>

            <View style={[styles.lineView]} />

            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <Text style={[styles.text2]}>
                Select a Car
              </Text>
              <View style={[styles.container]}>
                <Picker
                  mode="dropdown"
                  style={{ width: 200 }}
                  selectedValue={car}
                  onValueChange={value => setCar(value)}
                >
                  <Picker.Item label="Select Car" value="City" />
                  {cars_list.map((car, index) => (


                    <Picker.Item key={index + car.carregno} label={car.carregno} value={car.carregno} />

                  ))}

                </Picker>
              </View>
            </View>
            <View style={{alignSelf:'flex-end',paddingRight:40}}>
              <TouchableOpacity  
              onPress={() => navigation.navigate('Registercar', {})}>
                <Text style={[styles.addCarText]}>  Add New Car +</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.priceView]}>
              <Text style={[styles.priceText]}>
                Rent Per Day :
              </Text>
              <View style={[styles.container1]}>
                <TextInput
                  style={[styles.priceInput]}
                  keyboardType="number-pad"
                  placeholder="000"
                  placeholderTextColor="black"
                />
              </View>
            </View>
            <View>
              <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                <CheckBox
                  color={colors.themeColor}
                  value={Driver}
                  onValueChange={setDriver}
                /><Text style={{ fontSize: 20 }}>Driver Facility</Text>
              </View>

              <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                <CheckBox
                  color={colors.themeColor}
                  value={Negotiable}
                  onValueChange={setNegotiable}
                /><Text style={{ fontSize: 20 }}>Negotiable</Text>
              </View>
            </View>
           
            <View style={[styles.nextView]}>
              <TouchableOpacity
                onPress={() => submit()}
                style={[styles.submit]}
              >
                <Text style={[styles.submitText]}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default memo(PostCar);
