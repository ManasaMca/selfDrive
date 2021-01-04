import React, { memo, useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView,CheckBox } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import Styles from '../../stylesheet/button';
import styles from './postStyles';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';
import {carlist} from '../../Redux/selector/carselector';
import {useSelector, useDispatch} from 'react-redux';
import {Input, Picker} from 'native-base';
const PostCar = () => {
  const navigation = useNavigation();
  const cars_list = useSelector(carlist);
  const [date, setDate] = useState(new Date())
  const [car, setCar] = useState();

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
              onDateChange={setDate}
              color={colors.themeColor}
            />
            <View>

            </View>
            <View style={[styles.lineView]} />

<View style={{flexDirection:'row',marginVertical:10}}>
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
                                      <>
                                                  <Image key={index + car.carregno} source={require('../../assets/Getaride.jpeg')} style={{width:30,height:30,}}/>

                                        <Picker.Item key={index + car.carregno} label={car.carregno} value={car.carregno} />
                                        </>
                                    ))}

                                </Picker>
              </View>
</View>
<View>
    
<Text style={[styles.text2]}>
              Driver Facility
              </Text>
              <View style={{ flexDirection: 'row', marginLeft: 20 }}>
              {/* <CheckBox
                    color={colors.themeColor}
                        value={isSelected}
                        onValueChange={setSelection}
                    /><Text style={{ top: 5 }}>Negotiable</Text> */}
                    </View>
</View>
            <View style={styles.view_1}>
              <View style={[styles.nextView]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AvailableCars')} >
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
