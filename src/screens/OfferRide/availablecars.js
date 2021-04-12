import React, { useState, useEffect } from "react";
import { View, Picker, StyleSheet, Text, TextInput, StatusBar, CheckBox, TouchableOpacity, Image, ScrollView, FlatList, SafeAreaView } from "react-native";
//import * as Progress from 'react-native-progress';
import BASE_URL from '../../constants/apiendpoints';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './availablecarsStyles';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { carlist } from '../../Redux/selector/availablecarselector';
import { pcode } from '../../Redux/selector/userselector';
import { useSelector, useDispatch } from 'react-redux';
import { avail_car_fetch_action } from '../../Redux/action/availablecars';
import { heightPercentageToDP, widthPercentageToDP } from "../../stylesheet/responsiveSize";
import AvailableCarRow from "./AvailableCarRow";


const AvailableCars = ({ route }) => {
    const { date, seating, lati, longi, city, location } = route.params;
    const cars_list = useSelector(carlist);
    const p_code = useSelector(pcode)
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('pin code in avail', p_code)
        dispatch(
            avail_car_fetch_action(route.params, p_code)
        );
    }, [])
    useEffect(() => {
        console.log('cars available', cars_list)

    }, [cars_list])
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
           
                <View style={styles.container}>
                    <View >
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
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
                <View style={{height:heightPercentageToDP('77%')}}> 
                <ScrollView >

                <FlatList
                    data={cars_list}
                    renderItem={({ item }) => {

                        return <View style={styles.view1}>

                            <View style={{ width: widthPercentageToDP(35), alignItems: 'center', justifyContent: 'center', margin: 10, }}>

                                <Image
                                    source={item.carpic == null ? require('../../assets/image7.png') : { uri: "http://api.ryder.org.in/" + item.carpic }}
                                    style={styles.car} />
                            </View>
                            <View style={{ margin: 10, width: widthPercentageToDP(50), }}>
                                <Text style={[styles.headtext2]}>Rs: {item.offerprice}/Day</Text>
                                <View style={styles.vieww}>
                                    <Text style={styles.txt}>Driver Provision</Text>
                                    <Text style={styles.txt}>{item.carname}</Text>
                                    <Text style={styles.txt}>{item.location}</Text>
                                    <Text style={styles.txt}>{item.tdate}</Text>

                                </View>

                                <TouchableOpacity style={styles.button2}
                                    onPress={() => navigation.navigate('Cardetails', {
                                        ...item
                                    })}
                                >
                                    <Text style={styles.button}>View Details</Text></TouchableOpacity>
                            </View>

                        </View>

                    }}
                >

                </FlatList>
                <View style={{ width: 150,backgroundColor:'white' }} />
            </ScrollView>
            </View>

        </>
    );
}
export default AvailableCars;



