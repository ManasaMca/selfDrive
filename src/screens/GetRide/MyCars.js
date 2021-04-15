import React, { useState, useEffect } from "react";
import { View, Picker, StyleSheet, Text, TextInput, StatusBar, CheckBox, TouchableOpacity, Image, ScrollView, FlatList, SafeAreaView } from "react-native";
import BASE_URL from '../../constants/apiendpoints';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from '../OfferRide/availablecarsStyles';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { carlist } from '../../Redux/selector/availablecarselector';
import { pcode } from '../../Redux/selector/userselector';
import { useSelector, useDispatch } from 'react-redux';
import { avail_car_fetch_action } from '../../Redux/action/availablecars';
import { heightPercentageToDP, widthPercentageToDP } from "../../stylesheet/responsiveSize";


const MyCars = ({ route }) => {

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
                            My Cars
                            </Text>
                    </View>
                </View>
            </View>
            <View style={{ height: heightPercentageToDP('77%') }}>
                <ScrollView >
                    <View style={styles.view1}>

                        <View style={{ width: widthPercentageToDP(35), alignItems: 'center', justifyContent: 'center', margin: 10, }}>

                            <Image
                                source={require('../../assets/image7.png')}
                                style={styles.car} />
                        </View>
                        <View style={{ margin: 10, width: widthPercentageToDP(50), }}>
                           
                                <Text style={styles.txt}>Brand:</Text>
                                <Text style={styles.txt}>Reg No:</Text>
                                <Text style={styles.txt}>AC/Non-AC:</Text>
                                <Text style={styles.txt}>Seating:</Text>
                                <Text style={styles.txt}>Driver Facility:</Text>
                                <Text style={styles.txt}>Rent Per Day:</Text>

                        </View>

                    </View>

                    <View style={{ width: 150, backgroundColor: 'white' }} />
                </ScrollView>
            </View>

        </>
    );
}
export default MyCars;



