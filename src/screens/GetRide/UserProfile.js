import React, { memo, useState, useEffect } from 'react';
import { Animated, SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Linking, Image, TouchableOpacity, TextInput, Clipboard } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from "../../constants/appconstants";
import styles from './UserProfileStyles';

const UserProfile = ({ navigation }) => {
   


    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
            <SafeAreaView >
                <ScrollView style={{ backgroundColor: colors.themeColor }}>
                    <View style={[styles.TitleView]} >
                        <Text style={[styles.titleText]}>Profile</Text>

                    </View>
                    <View style={[styles.pv1]}>
                        <View style={[styles.imgContainer]}>
                            <Image style={[styles.img]} source={AppConstants.DriverImg} />
                            <TouchableOpacity style={[styles.profileImg]}
                            // onPress={() => handelDocProfile()}
                            >
                               
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.viewContainer]}>
                            <View style={[styles.inputView]}>
                                <View style={[styles.inputContainer]}>
                                    <Text style={{ color: colors.dimGrey }}>{'Name'}</Text>
                                    <TextInput style={[styles.textinput]}
                                        keyboardType="default"
                                        
                                        placeholderTextColor={colors.black}
                                   
                                    />
                                </View>
                                <View style={[styles.inputContainer]}>
                                   
                                    <TextInput style={[styles.textinput]}
                                      
                                        keyboardType="email-address"
                                        placeholder={'example@gmail.com'}
                                        placeholderTextColor={colors.black}
                                   
                                    />
                                </View>
                                <View style={[styles.inputContainer]}>
                                   
                                    <TextInput style={[styles.textinput]}
                                        keyboardType="number-pad"
                                        placeholder={'Mobile Number'}
                                        placeholderTextColor={colors.black}
                                       
                                    />
                                </View>
                                <View style={[styles.inputContainer]}>
                                   
                                    <TextInput style={[styles.textinput]}
                                      
                                        keyboardType="default"
                                        placeholder={'Location'}
                                        placeholderTextColor={colors.black}
                                   
                                    />
                                </View>
                                <View style={[styles.inputContainer]}>
                                  
                                    <TextInput style={[styles.textinput]}
                                        keyboardType="default"
                                        placeholder={'City'}
                                        placeholderTextColor={colors.black}
                                       
                                    />
                                </View>
                                <View style={[styles.inputContainer]}>
                                
                                    <TextInput style={[styles.textinput]}
                                        keyboardType="default"
                                        placeholder={'State'}
                                        placeholderTextColor={colors.black}
                                       
                                    />
                                </View>
                                <View>
                                    <Text style={[styles.carText]}> My Cars </Text>
                                </View>
                                <View style={[styles.carView]}>

                                    <View style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }} >

                                        <TouchableOpacity >

                                            <View style={{ width: '90%' }}>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={[styles.deleteView]}>
                                        <TouchableOpacity >
                                            <Image source={AppConstants.Edit} alt="" />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                                <View>
                                    <TouchableOpacity style={{ padding: 10, }} onPress={() => navigation.navigate('Registercar')}>
                                        <Text style={[styles.addCarText]}>  Add New Car +</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity
                                      
                                        style={[styles.btnStyle]} >

                                        <Text style={[styles.btnText]}>
                                            LogOut
                                    </Text>
                                    </TouchableOpacity>


                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
};





export default memo(UserProfile)