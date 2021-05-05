import React, { memo, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, StatusBar, Linking, TouchableOpacity, TextInput, CheckBox, ScrollView } from 'react-native';
import colors from '../../stylesheet/colors';
import {
    responsiveHorizontalSize,
    responsiveVerticalSize,
    responsiveFontSize,

} from '../../stylesheet/responsiveSize';

import CardStack, { Card } from 'react-native-card-stack-swiper';

const CardStack1 = ({ navigation }) => {


    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <SafeAreaView backgroundColor={colors.white} >
                <View style={[styles.flex_row]} >
                    <View style={[styles.pv1]}>
                        <TouchableOpacity
                            onPress={() => navigation.pop()}
                        >
                            {/* <Image source={AppConstants.BackArrow} alt="" /> */}
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.logoView]}>
                        {/* <Image source={AppConstants.LogoMedium} style={{ width: 50, height: 50 }} alt="" />
                     */}
                    </View>
                </View>

                <View style={[styles.Container]}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <CardStack  >
                            <Card ><Text >A</Text></Card>
                            <Card ><Text >B</Text></Card>
                            <Card ><Text >C</Text></Card>
                        </CardStack>
                    </ScrollView>
                </View>

            </SafeAreaView>
        </>

    );
}

export default memo(CardStack1);


const styles = StyleSheet.create({
    linktext: {
        color: colors.themeColor,
        fontSize: responsiveFontSize(22),
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'android' ? 'Geomanist' : null,
    },
    flex_row: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    logoView: {
        alignItems: 'center',
        width: '85%',
        justifyContent: 'center',
    },
    Title: {
        paddingLeft: responsiveHorizontalSize(7),
        paddingBottom: responsiveVerticalSize(0.5),
        paddingTop: responsiveVerticalSize(0.5),
        // alignItems: 'center',
        //  justifyContent: 'center',
        // width:'90%'
    },
    titleText: {
        fontSize: responsiveFontSize(22),
        color: colors.themeColor,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'android' ? 'Geomanist' : null,
        // alignSelf:'center'
    },
    Container: {
        height: '70%',
        width: '90%',
        padding: 10,
        borderColor: colors.grey,
        borderWidth: 0.8,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: colors.lightWhite,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    conditionText: {

        paddingTop: responsiveVerticalSize(0.5),
        fontSize: responsiveFontSize(16),
        color: colors.black,
        fontWeight: 'normal',
        fontFamily: Platform.OS === 'android' ? 'Geomanist' : null,
    },

    conditionText1: {
        fontSize: responsiveFontSize(18),
        color: colors.black,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'android' ? 'Geomanist' : null,
    },
    btnStyle: {
        backgroundColor: colors.themeColor,
        height: 50,
        width: '40%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 10
    },
    btnText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20
    },

});

