import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, StatusBar, CheckBox, TouchableOpacity, Image, ScrollView } from "react-native";
//import * as Progress from 'react-native-progress';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './availablecarsStyles'


const AvailableCars = () => {
    const navigation = useNavigation();
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
            <ScrollView style={{ flex: 1 }} >
                <View style={styles.container}>
                    <View style={{ top: 30 }}>

                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/BackWhite.png')}
                                    style={{ top: 15 }} />
                            </TouchableOpacity>

                            <Text style={styles.heading2}>
                                Available Cars
                        </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.background_view}>

                    <View style={styles.view1}>
                        <View style={styles.view2}>
                            <View>
                                <View style={styles.view3}>
                                    <Image source={require('../../assets/DriverImg.png')} style={styles.image1} />
                                    <Text style={styles.heading}>AR Travels</Text>
                                </View>
                                <Image source={require('../../assets/image8.png')} style={styles.car} />
                            </View>
                            <View>
                                <Text style={styles.headtext2}>Rs: 2000/Day</Text>
                                <View style={styles.vieww}><Text style={styles.txt}>Driver Provision</Text>
                                    <Text style={styles.txt}>Maruthi Swift Dzire</Text>
                                    <Text style={styles.txt}>Hyderabad</Text>
                                    <Text style={styles.txt}>28 July | 06:00 AM</Text>
                                    <Text style={styles.txt}>Negotiable</Text></View>
                                <TouchableOpacity style={styles.button2}
                                    onPress={() => navigation.navigate('Cardetails')}
                                >
                                    <Text style={styles.button}>View Details</Text></TouchableOpacity>
                            </View>
                        </View>

                    </View>

                    <View style={styles.view1}>
                        <View style={styles.view2}>
                            <View>
                                <View style={styles.view3}>
                                    <Image source={require('../../assets/DriverImg.png')} style={styles.image1} />
                                    <Text style={styles.heading}>AR Travels</Text>
                                </View>
                                <Image source={require('../../assets/image9.png')} style={styles.car} />
                            </View>
                            <View>
                                <Text style={styles.headtext2}>Rs: 2000/Day</Text>
                                <View style={styles.vieww}><Text style={styles.txt}>Driver Provision</Text>
                                    <Text style={styles.txt}>Maruthi Swift Dzire</Text>
                                    <Text style={styles.txt}>Hyderabad</Text>
                                    <Text style={styles.txt}>28 July | 06:00 AM</Text>
                                    <Text style={styles.txt}>Negotiable</Text></View>
                                <TouchableOpacity style={styles.button2}
                                    onPress={() => navigation.navigate('Cardetails')}
                                >
                                    <Text style={styles.button}>View Details</Text></TouchableOpacity>
                            </View>
                        </View>

                    </View>

                    <View style={styles.view1}>
                        <View style={styles.view2}>
                            <View>
                                <View style={styles.view3}>
                                    <Image source={require('../../assets/DriverImg.png')} style={styles.image1} />
                                    <Text style={styles.heading}>AR Travels</Text>
                                </View>
                                <Image source={require('../../assets/image7.png')} style={styles.car} />
                            </View>
                            <View>
                                <Text style={styles.headtext2}>Rs: 2000/Day</Text>
                                <View style={styles.vieww}><Text style={styles.txt}>Driver Provision</Text>
                                    <Text style={styles.txt}>Maruthi Swift Dzire</Text>
                                    <Text style={styles.txt}>Hyderabad</Text>
                                    <Text style={styles.txt}>28 July | 06:00 AM</Text>
                                    <Text style={styles.txt}>Negotiable</Text></View>
                                <TouchableOpacity style={styles.button2}
                                    onPress={() => navigation.navigate('Cardetails')}
                                >
                                    <Text style={styles.button}>View Details</Text></TouchableOpacity>
                            </View>
                        </View>

                    </View>


                </View>

            </ScrollView>
        </>
    );
}
export default AvailableCars;



