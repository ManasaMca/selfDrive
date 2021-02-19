import React, { memo, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { AppConstants } from "../../constants/appconstants";
import CustomInput from '../../CustomInput/CustomInput';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './loginStyles';
import colors from '../../stylesheet/colors';
import { users_fetch_action } from '../../Redux/action/useraction';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../assets/Ryder.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [mobile, setmobile] = useState('');
    
    const numberValidation = value =>
    value && !/^[0-9]{1,10}$/.test(value) ?  Alert.alert(
        "Error",
        "Please enter valid mobile number",
        [

            { text: "OK", onPress: () => {navigation.navigate('Login') , anotherFunc(mobile) }}
            
        ],
        { cancelable: false }
    ) : undefined;



const anotherFunc = (val) =>{
    setmobile('');
}

    const submit = () => {
        fetch('http://api.ryder.org.in/profile-otp.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                mobile: mobile
            })

        })
        .then((response) => response.json())
		 .then(async (response)=>{
            const dataJSON = JSON.stringify(response)          
            console.log('response', dataJSON);
           
			navigation.navigate('OTPVerification',{userToken:dataJSON})
		 })
		 .catch((error)=>{
		 console.error(error);
         });
            .then((response) => response.json())
            .then(async (response) => {
                const dataJSON = JSON.stringify(response)
                console.log('response', dataJSON);

                await AsyncStorage.setItem('userToken', dataJSON);
                navigation.navigate('OTPVerification')
            })
            .catch((error) => {
                console.error(error);
            });
    },
        openSearchModal = () => {
            RNGooglePlaces.getCurrentPlace(['placeID', 'location', 'name', 'address'])
                .then((results) => console.log(results))
                .catch((error) => console.log(error.message));

        }


    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.black} />
            <SafeAreaView style={{ backgroundColor: 'white', width: wp('100%') }}>
                <ScrollView >
                    <View style={{ height: hp('100%') }}>
                        <View >
                            <Image source={Logo} style={[styles.imgStyle]} />
                        </View>
                        <View style={[styles.textView]}>
                            <Text style={[styles.text]}> Get Moving with Ryder </Text>
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
                                    errorStatus={
                                        numberValidation(mobile) 
                                    }
                                    errorMessage={numberValidation(mobile)}
                                    

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

                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};


export default memo(Login);