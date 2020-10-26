import React, { memo, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { AppConstants } from "../../constants/appconstants";
import CustomInput from '../../CustomInput/CustomInput';
import styles from './loginStyles';
import colors from '../../stylesheet/colors';
// import { doProfileOtpRequest } from '../../state/actions';
// import { useDispatch, useSelector } from 'react-redux';

const Login = ({ navigation }) => {
    // const [mobile, setMobile] = useState("")
    // const dispatch = useDispatch()
    
    // const numberValidation = value =>
    //     value && !/^[0-9]{1,10}$/.test(value) ?  Alert.alert(
    //         "Error",
    //         "Please enter valid mobile number",
    //         [

    //             { text: "OK", onPress: () => navigation.navigate('Login') }
    //         ],
    //         { cancelable: false }
    //     ) : undefined;

    // const generateOtp = (mobile) => {
    //     const data = {
    //         mobile: mobile,
    //         //isSendOtp: true
    //         // deviceId: `${new Date().getTime()}`
    //     };
    //     if (mobile !== '') {
    //         dispatch(doProfileOtpRequest(data));
    //         //const count = useSelector(state => state.appReducer.userLoginResult);
    //         //console.log('count', count)
    //         navigation.navigate('OTPVerification', { mobile: mobile });
    //     } else {
    //         Alert.alert(
    //             "Error",
    //             "Please enter phone number to proceed further",
    //             [

    //                 { text: "OK", onPress: () => navigation.navigate('Login') }
    //             ],
    //             { cancelable: false }
    //         );
    //     }

    // }

  
    


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
                                placeholder="Login with Your Mobile Number"
                                placeholderTextColor={colors.dimGrey}
                                keyboardType='number-pad'
                                maxLength={10}
                                // value={mobile}
                                // onChangeText={value => setMobile(value)}
                                // errorStatus={
                                //     numberValidation(mobile) 
                                // }
                                // errorMessage={numberValidation(mobile)}
                            />
                        </View>
                    </View>
                    <View style={[styles.btnContainer]}>
                        <TouchableOpacity style={[styles.btn]}
                           //  onPress={() => generateOtp(mobile)}
                           onPress={() => navigation.navigate('OTPVerification')}
                        >
                            <Text style={[styles.btnText]}>
                                Get One-Time Password
                            </Text>
                        </TouchableOpacity>
                    </View>
               
                    <View style={{ padding: 8 }}>
                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};


export default memo(Login);