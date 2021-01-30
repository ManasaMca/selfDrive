import React, { memo, useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, CheckBox } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import Styles from '../../stylesheet/button';
import styles from './postStyles';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';
import {pcode} from '../../Redux/selector/userselector';
import {carlist} from '../../Redux/selector/carselector';
import {useSelector, useDispatch} from 'react-redux';
import {Input, Picker} from 'native-base';
const PostCar = () => {
  const navigation = useNavigation();
  const cars_list = useSelector(carlist);
  const ppcode = useSelector(pcode);
  const [date, setDate] = useState(new Date())
  const [car, setCar] = useState('');

  const [Driver, setDriver] = useState(false);

  const [Negotiable, setNegotiable] = useState(false);


  const submit=()=>{

    console.log("log",ppcode,date,car,Driver,Negotiable)
    
    if(date=='' || car==''){
      alert("Enter All Values")
  }
  else{

  fetch('http://udrive.b2bmart.org.in/api/add-ride.php',{
method:'post',
header:{
  'Accept': 'application/json',
  'Content-type': 'application/json'
},
body:JSON.stringify({
          pcode:ppcode,
          carid:car,
          driver_fecility:Driver,
          negotiable: Negotiable,
          r_date:date
})

  })
  .then((response) => response.json())
.then(async (response)=>{
      const dataJSON = JSON.stringify(response)
      const userToken1 =JSON.parse(dataJSON);
      console.log('response', userToken1);

      alert(userToken1.Message)			
})
.catch((error)=>{
console.error(error);
   });
   navigation.navigate('AvailableCars')

  }

  }
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
            <View>
            <View style={{ flexDirection: 'row', marginLeft: 20 }}>
              <CheckBox
                    color={colors.themeColor}
                        value={Driver}
                        onValueChange={setDriver}
                    /><Text style={{ top: 5 }}>Driver Facility</Text>
                    </View>
                    
              <View style={{ flexDirection: 'row', marginLeft: 20 }}>
              <CheckBox
                    color={colors.themeColor}
                        value={Negotiable}
                        onValueChange={setNegotiable}
                    /><Text style={{ top: 5 }}>Negotiable</Text>
                    </View>
</View>
            <View style={styles.view_1}>
              <View style={[styles.nextView]}>
                <TouchableOpacity
                  onPress={() =>submit()} >
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

export default memo(PostCar);
