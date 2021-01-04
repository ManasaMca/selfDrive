import React, { memo, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { AppConstants } from "../../constants/appconstants";
import CustomInput from '../../CustomInput/CustomInput';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './loginStyles';
import colors from '../../stylesheet/colors';
import {users_fetch_action} from '../../Redux/action/useraction';
import {useSelector, useDispatch} from 'react-redux';

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [mobile, setmobile] = useState('');

    const submit = () =>{
        fetch('http://udrive.b2bmart.org.in/api/profile-otp.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				mobile: mobile
			})
			
        })
        .then((response) => response.json())
		 .then(async (response)=>{
            const dataJSON = JSON.stringify(response)          
            console.log('response', dataJSON);
           
            await AsyncStorage.setItem('userToken',dataJSON);
			navigation.navigate('OTPVerification')
		 })
		 .catch((error)=>{
		 console.error(error);
         });
    },
     openSearchModal=()=>{
        RNGooglePlaces.getCurrentPlace(['placeID', 'location', 'name', 'address'])
        .then((results) => console.log(results))
        .catch((error) => console.log(error.message));

    }

//    const openSearchModal() {
//         RNGooglePlaces.openAutocompleteModal()
//         .then((place) => {
//             console.log(place);
//             // place represents user's selection from the
//             // suggestions and it is a simplified Google Place object.
//         })
//         .catch(error => console.log(error.message));  // error is a Javascript Error object
//       }
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.black} />
            <SafeAreaView>
                <ScrollView>
                    <View >
                        <Image source={AppConstants.Login} style={[styles.imgStyle]} />
                    </View>
                    <View style={[styles.textView]}>
                        <Text style={[styles.text]}> Get Moving with U DRIVE </Text>
                    </View>
                    <View style={[styles.flex_row]}>
                        <View style={[styles.phoneIcon]}>
                            <Image source={AppConstants.phone} />
                        </View>
                        <View style={[styles.flex_1]} >
                            <CustomInput
                                value={mobile}
                                onChangeText={(value) => setmobile(value)}
                                placeholder="Login with Your Mobile Number"
                                placeholderTextColor={colors.dimGrey}
                                keyboardType='number-pad'
                                maxLength={10}
                              
                            />
                        </View>
                    </View>
                    <View style={[styles.btnContainer]}>
                        <TouchableOpacity style={[styles.btn]}
                          // onPress={() => navigation.navigate('OTPVerification')}
                           onPress={() => submit()}
                        >
                            <Text style={[styles.btnText]}>
                                Get One-Time Password
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* <TouchableOpacity style={[styles.btn]}
                          // onPress={() => navigation.navigate('OTPVerification')}
                          onPress={() => openSearchModal()}
                        >
                            <Text style={[styles.btnText]}>
                               Pick a Place
                            </Text>
                        </TouchableOpacity> */}
               
                    <View style={{ padding: 8 }}>
                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};


export default memo(Login);