import React, { memo, useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text, Image, TouchableOpacity, Alert, Clipboard } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import colors from '../../stylesheet/colors';
import { AppConstants } from "../../constants/appconstants";
import { useSelector } from 'react-redux'
import styles from './OTPStyles';
// import { getFCMToken, saveMobileNumber } from '../../utils/AsyncStorageHelper';
// import Loader from '../../components/Loader';
// import { registerDeviceAPI } from '../../state/api';
// import { useRoute } from '@react-navigation/native';
// import { connect, useDispatch } from 'react-redux';
// import { doProfileOtpRequest } from '../../state/actions';


const OTPVerification = ({ navigation }) => {
    // const [otp, setOtp] = useState("");
    // const [otpError, setOtpError] = useState("");
    // const mobileOtp = useSelector(state => state.appReducer.userLoginResult);
    // const [loading, setLoading] = useState(false);
    // const route = useRoute()
    // const dispatch = useDispatch()
    // const otpRef = useRef();

    // const {mobile} = route.params;
    // const onRegisterDevice = async () => {
    //     setLoading(true);
    //     const fcmToken = await getFCMToken();
    //     const data = {
    //         mobile: mobile,
    //         deviceid: fcmToken
    //     }
    //     const res = await registerDeviceAPI(data);
    //     setLoading(false);
    //     await saveMobileNumber(mobile)
    //     //alert(JSON.stringify(res));
    //     navigation.replace('OfferRideTab', {
    //         params: {
            
    //         },
    //         screen: 'SignUp'
    //     });
    // }
   
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={ colors.white } />
            <SafeAreaView backgroundColor={colors.white}>
                {/* {loading && <Loader loading={true}/>} */}

                <View style={ [styles.flex_row] } >
                    <View style={ [styles.pv1] }>
                        <TouchableOpacity
                            onPress={ () => navigation.navigate('Login') }
                        >
                            <Image source={ AppConstants.BackArrow } alt="" />
                        </TouchableOpacity>
                    </View>
                    <View style={ [styles.logoView] }>
                        {/* <Image source={ AppConstants.LogoMedium } alt="" /> */}
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
                       // ref={otpRef}
                        style={ [styles.otp_container] }
                        pinCount={ 4 }
                     //   code={otp}
                        autoFocusOnLoad
                        codeInputFieldStyle={ [styles.otp_input] }
                        codeInputHighlightStyle={ [styles.otp_active] }
                        // onCodeChanged={(code) => {
                        //     setOtp(code);
                        //     setOtpError("");
                        // }}
                        // onCodeFilled={ (code => {
                        //     console.log('otp', mobileOtp.otp)
                        //     console.log('code', code)
                        //     if (code == mobileOtp.otp) {
                        //         if (mobileOtp.isRegistered == false) {
                        //             navigation.navigate('UserSignUp', {mobile: mobile});
                        //         }
                        //         else {
                        //            onRegisterDevice()
                        //         }
                        //     } else {
                        //         setOtp("");
                        //         setOtpError('Invalid OTP');
                        //         Alert.alert(
                        //             "Error",
                        //             "OTP is wrong.Please re enter your otp",
                        //             [

                        //                 { text: "OK", onPress: () => navigation.navigate('OTPVerification') }
                        //             ],
                        //             { cancelable: false }
                        //         );
                        //     }
                        // }) }
                        // clearInputs={otpError != "" ? true : false}
                    />
                </View>
                <View>
                    <TouchableOpacity 
                    // onPress={()=>{
                    //     const data = {
                    //         mobile: mobile,
                    //     }
                    //     dispatch(doProfileOtpRequest(data));
                    //     setOtp("");  }}
                        >
                        <Text style={ [styles.text3] }>
                            Resend Code
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={ [styles.textView] }>
                    <View style={ { alignItems: 'center', justifyContent: 'center' } } >
                        <TouchableOpacity 
                      //  onPress={()=>{ navigation.pop() }}
                            >
                            <Text style={ [styles.text4] }>
                                Edit My Mobile Number
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ [styles.nextView] }>
                        <TouchableOpacity
                         onPress={() => navigation.navigate('UserSignUp')}
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
