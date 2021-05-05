import React, { memo, useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text, Image, TouchableOpacity, Alert, Clipboard, ScrollView } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import colors from '../../stylesheet/colors';
import { AppConstants } from "../../constants/appconstants";
import styles from './OTPStyles';
import AsyncStorage from '@react-native-community/async-storage';
import { users_fetch_action } from '../../Redux/action/useraction';
import { useSelector, useDispatch } from 'react-redux';
import { getFCMToken, saveMobileNumber } from '../../utils/AsyncStorageHelper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';

const OTPVerification = ({ route, navigation }) => {
    const { userToken } = route.params;
    const dispatch = useDispatch();
    const [otp, setotp] = useState('');
    console.log("input", otp)

    const resendOTP = () => {
        fetch('http://api.ryder.org.in/profile-otp.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                mobile: JSON.parse(userToken).data[0].mobile
            })

        })
            .then((response) => response.json())
            .then(async (response) => {
                const dataJSON = JSON.stringify(response)
                console.log('response', dataJSON);
                navigation.navigate('OTPVerification', { userToken: dataJSON })

            })
            .catch((error) => {
                console.error(error);
            });

    }

    const submit = async () => {
        const userJson = JSON.parse(userToken)

        if (userJson.otp == otp && userJson.isRegistered == false) {
            navigation.navigate('SignUp');
        }
        else if (userJson.otp == otp && userJson.isRegistered == true) {
            const userDetails = userJson.data[0]

            await AsyncStorage.setItem('userToken', JSON.stringify(userDetails));

            await saveMobileNumber(userDetails.mobile)
            dispatch(
                users_fetch_action({
                    userDetails
                }),
            );


            navigation.navigate('OfferRideTab', {

                screen: 'Home'
            });
        }
        else {
            alert("Entered Otp is wrong")
        }



    }




    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <SafeAreaView backgroundColor={colors.white}>
                <ScrollView>
                    <View style={{ height: hp('100%'), width: wp('100%') }}>
                        <View style={[styles.flex_row]} >
                            <View style={[styles.pv1]}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Login')}
                                >
                                    <Image source={AppConstants.BackArrow} alt="" />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.logoView]}>

                                <Image
                                    source={require('../../assets/Ryder.png')}
                                    style={{ width: 50, height: 50, borderRadius: 50 }}
                                />
                            </View>
                        </View>
                        <View style={[styles.text1View]} />
                        <View>
                            <Text style={styles.text1} >
                                OTP Your Verification Code
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.text2}>
                                Please enter the verification code sent to your phone
                            </Text>
                        </View>
                        <View >
                            <OTPInputView
                                code={otp}
                                onCodeChanged={(value) => setotp(value)}
                                style={[styles.otp_container]}
                                pinCount={4}
                                autoFocusOnLoad
                                codeInputFieldStyle={[styles.otp_input]}
                                codeInputHighlightStyle={[styles.otp_active]}
                            />
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => resendOTP()} >
                                <Text style={[styles.text3]}>
                                    Resend Code
                            </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.textView]}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}  >
                                    <Text style={[styles.text4]}>
                                        Edit My Mobile Number
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.nextView]}>
                                <TouchableOpacity
                                    onPress={() => submit()}
                                // onPress={() => navigation.navigate('UserSignUp')}
                                >
                                    <Image source={AppConstants.Next} alt="" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
};

export default OTPVerification
