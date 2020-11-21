import React, { memo, useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text, Image, TouchableOpacity, Alert, Clipboard } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import colors from '../../stylesheet/colors';
import { AppConstants } from "../../constants/appconstants";
import styles from './OTPStyles';
import AsyncStorage from '@react-native-community/async-storage';


const OTPVerification = ({ navigation }) => {
    const [otp, setotp] = useState('');
    console.log("input",otp)

    const submit = async() =>{
        console.log("input",otp)
        let userToken = await AsyncStorage.getItem('userToken');
        const userToken1 =JSON.parse(userToken);
         console.log("userToken",userToken1)
         
        if(userToken1.otp==otp && userToken1.isRegistered==false){
            console.log("userToken",userToken1.otp)
            navigation.navigate('UserSignUp');
        }
        else if(userToken1.otp==otp && userToken1.isRegistered==true){
            console.log("userToken",userToken1.otp)
            navigation.navigate('OfferRideTab', {
                                    
                screen: 'SignUp'
            });
        }
        else{
            alert("Entered Otp is wrong")
        }



    }
   



    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={ colors.white } />
            <SafeAreaView backgroundColor={colors.white}>
               
                <View style={ [styles.flex_row] } >
                    <View style={ [styles.pv1] }>
                        <TouchableOpacity
                            onPress={ () => navigation.navigate('Login') }
                        >
                            <Image source={ AppConstants.BackArrow } alt="" />
                        </TouchableOpacity>
                    </View>
                    <View style={ [styles.logoView] }>
                     
                        <Text>
                            Logo
                        </Text>
                    </View>
                </View>
                <View style={ [styles.text1View] } />
                <View>
                    <Text style={ styles.text1 } >
                        OTP Your Verification Code
                        </Text>
                </View>
                <View>
                    <Text style={ styles.text2 }>
                        Please enter the verification code sent to your phone
                        </Text>
                </View>
                <View >
                    <OTPInputView
                        code={otp}
                        onCodeChanged={(value) => setotp(value)}
                        style={ [styles.otp_container] }
                        pinCount={ 4 }                
                        autoFocusOnLoad
                        codeInputFieldStyle={ [styles.otp_input] }
                        codeInputHighlightStyle={ [styles.otp_active] }
                    />
                </View>
                <View>
                    <TouchableOpacity  >
                        <Text style={ [styles.text3] }>
                            Resend Code
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={ [styles.textView] }>
                    <View style={ { alignItems: 'center', justifyContent: 'center' } } >
                        <TouchableOpacity    >
                            <Text style={ [styles.text4] }>
                                Edit My Mobile Number
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ [styles.nextView] }>
                        <TouchableOpacity
                        onPress={() => submit()}
                        // onPress={() => navigation.navigate('UserSignUp')}
                        >
                            <Image source={ AppConstants.Next } alt="" />
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        </>
    )
};

export default  memo(OTPVerification);
