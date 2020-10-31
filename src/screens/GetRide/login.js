import React, { memo, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { AppConstants } from "../../constants/appconstants";
import CustomInput from '../../CustomInput/CustomInput';
import styles from './loginStyles';
import colors from '../../stylesheet/colors';

const Login = ({ navigation }) => {


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
                              
                            />
                        </View>
                    </View>
                    <View style={[styles.btnContainer]}>
                        <TouchableOpacity style={[styles.btn]}
                         
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