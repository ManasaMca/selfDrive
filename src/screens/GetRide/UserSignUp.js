import React, { memo, useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text,TextInput, Image, TouchableOpacity, Button, ScrollView, Alert} from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from "../../constants/appconstants";
import styles from './UserSignUpStyles';

const UserSignUp = ({ navigation }) => {


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
                      
                        <Text>
                            Logo
                        </Text>
                    </View>
                    </View>
                    <View style={[styles.lineView]} />
                   

                    <View>
                        <Text style={[styles.text1]} >
                            Confirm Your Infromation
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row',marginTop:10 }}>

                    <View style={{ width: '40%' ,marginLeft:10,borderBottomColor:colors.black,borderBottomWidth:1}}>
                            <TextInput 
                                placeholder="First Name"
                                placeholderTextColor="black"
                               
                            />
                        </View>          
                        <View style={{ width: '40%' ,marginLeft:10, borderBottomColor:colors.black,borderBottomWidth:1}}>
                        <TextInput 
                                placeholder="Last Name"
                                placeholderTextColor="black"
                            
                            />

                        </View>
                    </View>
                    <View style={[styles.mobileView]}>
                    <View style={{ width: '80%' ,borderBottomColor:colors.black,borderBottomWidth:1,marginTop:10}}>
                        <TextInput 
                                keyboardType="email-address"
                                placeholder="Your Email Address"
                                placeholderTextColor="black"
                              
                            />
                        </View>
                    </View>
                    <View style={[styles.mobileView]}>
                    <View style={{ width: '80%' ,borderBottomColor:colors.black,borderBottomWidth:1,marginTop:10}}>
                        <TextInput 
                              placeholder="Mobile"
                                keyboardType="number-pad"
                                placeholderTextColor="black"
                            />
                        </View>
                    </View>
                  
                    <View style={[styles.mobileView]}>
                    <View style={{ width: '80%' ,borderBottomColor:colors.black,borderBottomWidth:1,marginTop:10}}>
                        <TextInput 
                        
                             placeholder="City"
                             placeholderTextColor="black"
                                keyboardType="default" 
                            />
                        </View>
                    </View>
                    <View style={[styles.mobileView]}>
                        <View style={{ width: '80%' ,borderBottomColor:colors.black,borderBottomWidth:1,marginTop:10}}>
                        <TextInput 
                             placeholder="Pincode"
                                keyboardType="default"
                                placeholderTextColor="black"
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
                            <TouchableOpacity 
                            onPress={ () => handleButtonPress() }
                              onPress={() => {
                                 navigation.navigate('OfferRideTab', {
                                    
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