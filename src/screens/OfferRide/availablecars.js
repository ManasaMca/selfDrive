import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, StatusBar, CheckBox, TouchableOpacity, Image, ScrollView,FlatList } from "react-native";
//import * as Progress from 'react-native-progress';
import BASE_URL from '../../constants/apiendpoints';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './availablecarsStyles';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {carlist} from '../../Redux/selector/carselector';
import {useSelector, useDispatch} from 'react-redux';


const AvailableCars = () => {
    const cars_list = useSelector(carlist);
    const navigation = useNavigation();
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
            <ScrollView style={{ flex: 1 }} >
                <View style={styles.container}>
                    <View style={{ top: 30 }}>
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <TouchableOpacity   onPress={() => navigation.goBack()}>
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
               
                <FlatList
            data={cars_list}
            renderItem={({ item }) => (
                <View style={styles.background_view}>
                    <View style={styles.view1}>
                        <View style={styles.view2}>
                            <View>
                                <View style={styles.view3}>
                                    <Image source={require('../../assets/DriverImg.png')} style={styles.image1} />
                                    <Text style={styles.heading}>AR Travels</Text>
                                </View>
                                <Image source={{ uri: "http://udrive.b2bmart.org.in/api/" + item.capic }}
                                        style={styles.car} />
                            </View>
                            <View>
                                <Text style={styles.headtext2}>Rs: 2000/Day</Text>
                                <View style={styles.vieww}>
                                    <Text style={styles.txt}>Driver Provision</Text>
                                    <Text style={styles.txt}>{item.carname}</Text>
                                    <Text style={styles.txt}>{item.city}</Text>
                                    <Text style={styles.txt}>{item.tdate}</Text>
                                    
                                    
                                    </View>

                                <TouchableOpacity style={styles.button2}
                                    onPress={() => navigation.navigate('Cardetails')}
                                >
                                    <Text style={styles.button}>View Details</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>

                  

                </View>
                  )}
                  //Setting the number of column
                  numColumns={1}
                //   keyExtractor={(item, index) => index.toString()}
                />

            </ScrollView>
        </>
    );
}
export default AvailableCars;



