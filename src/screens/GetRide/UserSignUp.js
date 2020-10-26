import React, { memo, useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text, Image, TouchableOpacity, Button, ScrollView, Alert} from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { doProfileRequest, doProfileOtpRequest, doGetProfileRequest } from '../../state/actions'
import colors from '../../stylesheet/colors';
import { AppConstants } from "../../constants/appconstants";
import styles from './UserSignUpStyles';
import { TextField, } from 'react-native-material-textfield';
// import Toast from 'react-native-simple-toast'
// import { doProfile } from '../../state/api';
// import Loader from '../../components/Loader';
// import { AppOkAlert } from '../../constants/utils';
// import { useRoute } from '@react-navigation/native';
// import { getFCMToken, saveMobileNumber } from '../../utils/AsyncStorageHelper';


const UserSignUp = ({ navigation }) => {
//     const [fname, setFname] = useState("")
//     const [lname, setLname] = useState("")
//     const [email, setEmail] = useState("")
//     const [addr1, setAddr1] = useState("")
//     const [addr2, setAddr2] = useState("")
//     const [city, setCity] = useState("")
//     const [pin, setPin] = useState("")
//     const route = useRoute();
//     const {mobile} = route.params;
//     const signUp = {mobile: mobile}; // useSelector(state => state.appReducer.userLoginResult);
//     const dispatch = useDispatch();
//     const [loading, setLoading] = useState(false);

//    // const generateOtp = (mobile) => {
//    const handleButtonPress= async() => {
      
    //    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //    if (reg.test(email) === false) {
    //        Alert.alert(
    //            "Error",
    //            "Email is incorrect",
    //            [

    //                { text: "OK", onPress: () => navigation.navigate('UserSignUp') }
    //            ],
    //            { cancelable: false }
    //        );
    //        return;

    //    }
    //    else {
    //        setEmail(email)
    //        console.log("Email is Correct");
    //    }
    //    const isFnameValid = /^[A-z]+$/.test(fname)
    //    const isLnameValid = /^[A-z]+$/.test(lname)
    //    if (isFnameValid !== true && isLnameValid ) {
    //        Alert.alert(
    //            "Error",
    //            "Name is incorrect",
    //            [

    //                { text: "OK", onPress: () => navigation.navigate('UserSignUp') }
    //            ],
    //            { cancelable: false }
    //        );
    //        return;

    //    }
    //    else {
    //        setFname(fname)
    //        setLname(lname)
    //        console.log("Name is Correct");
    //    }

    //    if(fname == ''){
    //         Toast.show('Please enter First Name', Toast.SHORT);
    //         return;
    //    }

    //    if(lname == ''){
    //         Toast.show('Please enter Last Name', Toast.SHORT);
    //         return;
    //     }

    //     if(email == ''){
    //         Toast.show('Please enter Email', Toast.SHORT);
    //         return;
    //     }
    //     const fcmToken = await getFCMToken();

    //    const data = {
    //        name: fname + lname,
    //        mobile: signUp.mobile,
    //        email: email,
    //        addr1: addr1,
    //        addr2: addr2,
    //        city: city,
    //        pincode: pin,
    //        profilepic:'',
    //        deviceid:fcmToken
    //      };
    //      console.log('data',data);
    //      setLoading(true);
    //      const res = await doProfile(data);
    //      setLoading(false);
    //      if(res.statusCode == 1){
    //         dispatch(doProfileOtpRequest({
    //             mobile: signUp.mobile
    //         })); 
    //         dispatch(doGetProfileRequest({
    //             mobile: signUp.mobile
    //         }));
    //         await saveMobileNumber(signUp.mobile)

    //         AppOkAlert(res.message, () => {
    //                 navigation.navigate('OfferRideTab', {
    //                     params:data,
    //                     screen: 'SignUp'
    //                 });
    //          })
    //      }else {
    //         AppOkAlert(res.message, () => {

    //         })
    //      }
    //     // dispatch(doProfileRequest(data));
       



    // }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <SafeAreaView backgroundColor={colors.white}>
                <ScrollView>
                    <View style={[styles.flex_row]} >
                        <View style={[styles.pv1]}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('OTPVerification')}
                            >
                                <Image source={AppConstants.BackArrow} alt="" />
                            </TouchableOpacity>
                        </View>
                        <View style={ [styles.logoView] }>
                        {/* <Image source={ AppConstants.LogoMedium } alt="" /> */}
                        <Text>
                            Logo
                        </Text>
                    </View>
                    </View>
                    <View style={[styles.lineView]} />
                    {/* {loading && <Loader loading={loading} />} */}

                    <View>
                        <Text style={[styles.text1]} >
                            Confirm Your Infromation
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>

                        <View style={[styles.textView]}>
                            <TextField style={[styles.fieldText]}
                                label='First'
                                placeholder="First Name"
                                placeholderTextColor="black"
                                // value={ fname }
                                // onChangeText={ value => setFname(value) }
                                
                            />
                        </View>
                        <View style={[styles.textView]}>
                            <TextField style={[styles.fieldText]}
                                label='Last'
                                placeholder="Last Name"
                                placeholderTextColor="black"
                                // value={ lname }
                                // onChangeText={ value => setLname(value) }

                            // formatText={this.formatText}
                            // onSubmitEditing={this.onSubmit}
                            // ref={this.fieldRef}
                            />

                        </View>
                    </View>
                    <View style={[styles.mobileView]}>
                        <View style={{ width: '100%' }}>
                            <TextField style={[styles.fieldText]}
                                label='Email'
                                keyboardType="email-address"
                                placeholder="Your Email Address"
                                placeholderTextColor="black"
                                // value={ email }
                                // onChangeText={ value => setEmail(value) }
                            />
                        </View>
                    </View>
                    <View style={[styles.mobileView]}>
                        <View style={{ width: '100%' }}>
                            <TextField style={[styles.fieldText]}
                                label='Mobile Number'
                                keyboardType="number-pad"
                                // value= {signUp.mobile}
                                placeholderTextColor="black"
                                // editable={ signUp.mobile ? false : true }
                            />
                        </View>
                    </View>
                   {/* <View style={[styles.mobileView]} >
                        <View style={{ width: '100%' }}>
                            <TextField style={[styles.fieldText]}
                                label='Addr 1'
                                keyboardType="default"
                                value={ addr1}
                                onChangeText={ value => setAddr1(value) }
                            />
                        </View>
                    </View>
                    <View style={[styles.mobileView]}>
                        <View style={{ width: '100%' }}>
                            <TextField style={[styles.fieldText]}
                                label='Addr 2'
                                keyboardType="default"
                                value={ addr2 }
                                onChangeText={ value => setAddr2(value) }
                            />
                        </View>
                    </View>*/}
                    <View style={[styles.mobileView]}>
                        <View style={{ width: '100%' }}>
                            <TextField style={[styles.fieldText]}
                                label='City'
                                keyboardType="default" 
                                // value={ city }
                                // onChangeText={ value => setCity(value) }
                            />
                        </View>
                    </View>
                    <View style={[styles.mobileView]}>
                        <View style={{ width: '100%' }}>
                            <TextField style={[styles.fieldText]}
                                label='State'
                                keyboardType="default"
                                // value={ pin }
                                // onChangeText={ value => setPin(value) }
                            />
                        </View>
                    </View>
                    
                    <View style={[styles.condnView]}>
                        <View style={{ width: '80%',  }}>
                            <Text style={{ fontSize: 15, color: colors.dimGrey }}>
                                By continuing, I confirm that I have read and agree to the
                               
                                <TouchableOpacity>
                                    <Text style={{ color: colors.themeColor , }}>
                                        Terms & Conditions   
                                    </Text>
                                </TouchableOpacity>
                              
                                <Text style={{ fontSize: 15, color: colors.dimGrey }}>
                               And
                                </Text>
                                <TouchableOpacity>
                                    <Text style={{ color: colors.themeColor , }}>
                                         Privacy Policy .
                                    </Text>
                                </TouchableOpacity>
                                </Text>
                        </View>

                        <View style={[styles.nextView]}>
                            <TouchableOpacity //onPress={ () => handleButtonPress() }
                             onPress={() => {
                                navigation.navigate('OfferRideTab', {
                                   // params:data,
                                    screen: 'SignUp'
                                })}}
                            >
                                <Image source={AppConstants.Next} alt="" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
};


export default memo(UserSignUp);