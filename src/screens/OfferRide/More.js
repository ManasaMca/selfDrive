import React, { memo, useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, Share, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import colors from '../../stylesheet/colors';
import {
    responsiveHorizontalSize,
    responsiveVerticalSize,
    responsiveFontSize,
    SCREEN_HEIGHT,
    SCREEN_WIDTH
} from '../../stylesheet/responsiveSize';

import { getFCMToken, saveMobileNumber } from '../../utils/AsyncStorageHelper'

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';


const OnClick = () => {
    BackHandler.exitApp()

    return <View>

    </View>
};

const OnShare = () => {
    Share.share({
        message: 'https://play.google.com/store/apps/details?id=com.carpooling.inatrip',
        url: 'https://play.google.com/store/apps/details?id=com.carpooling.inatrip',
        title: 'Wow, did you see that?'
    })

};

const More = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <SafeAreaView style={{ flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT, backgroundColor: 'white' }}>

                <View style={styles.pv1} >
                    <Image source={require('../../assets/Ryder.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                    <Text style={styles.title}>RYDER-SELF DRIVE</Text>
                </View>
                <Animatable.View
                    animation='fadeInRight'
                    duration={1000}
                    useNativeDriver={true}
                    direction="alternate"
                >
                    <View style={styles.container}>
                        <View style={styles.pv2} >
                            <TouchableOpacity style={styles.btn}
                                onPress={() => navigation.navigate('Profile')}>

                                <View style={styles.pv3}>

                                    <Icon
                                        name={'user'}
                                        size={28}
                                        color={colors.themeColor}
                                    />
                                </View>
                                <View style={styles.pv4}>
                                    <Text style={styles.text1} > Profile</Text>

                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.pv2} >
                            <TouchableOpacity style={styles.btn}
                                onPress={() => navigation.navigate('Support')}>
                                <View style={styles.pv3}>

                                    <Icon1
                                        name={'contacts'}
                                        size={28}
                                        color={colors.themeColor}
                                    />
                                </View>
                                <View style={styles.pv4}>

                                    <Text style={styles.text1} > Support </Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pv2} >
                            <TouchableOpacity style={styles.btn}
                            // onPress={() => OnShare()}
                            >
                                <View style={styles.pv3}>

                                    <Icon
                                        name={'share-alt'}
                                        size={28}
                                        color={colors.themeColor}
                                    />
                                </View>
                                <View style={styles.pv4}>

                                    <Text style={styles.text1} > Share</Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pv2} >
                            <TouchableOpacity style={styles.btn}
                            // onPress={() => OnShare()}
                            >
                                <View style={styles.pv3}>

                                    <Icon1
                                        name={'star'}
                                        size={28}
                                        color={colors.themeColor}
                                    />
                                </View>
                                <View style={styles.pv4}>

                                    <Text style={styles.text1} > Review Us</Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pv2} >
                            <TouchableOpacity style={styles.btn}
                                onPress={() => OnClick()}>
                                <View style={styles.pv3}>

                                    <Icon1
                                        name={'exit-to-app'}
                                        size={28}
                                        color={colors.themeColor}
                                    />
                                </View>
                                <View style={styles.pv4}>

                                    <Text style={styles.text1} > Exit</Text>

                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.pv2} >
                            <TouchableOpacity style={styles.btn}
                                onPress={() => {
                                    saveMobileNumber('');
                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'Login' }]
                                    })
                                }}>
                                <View style={styles.pv3}>

                                    <Icon3
                                        name={'logout'}
                                        size={28}
                                        color={colors.themeColor}
                                    />
                                </View>
                                <View style={styles.pv4}>

                                    <Text style={styles.text1} > LogOut </Text>

                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Animatable.View>
            </SafeAreaView>
        </>
    );
};

export default memo(More);

const styles = StyleSheet.create({
    pv1: {
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: responsiveVerticalSize(3),
        marginHorizontal: responsiveHorizontalSize(1)
    },
    pv2: {
        marginVertical: responsiveVerticalSize(0.8),
        marginHorizontal: responsiveHorizontalSize(5),

    },
    title: {
        fontWeight: 'bold',
        fontSize: responsiveFontSize(26),
        color: colors.themeColor,
        fontFamily: 'Roboto-Regular'

    },
    text1: {
        marginHorizontal: responsiveHorizontalSize(2),
        fontSize: responsiveFontSize(18),
        color: colors.black,
        fontFamily: 'Roboto-Regular'
    },

    pv3: {
        width: '35%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    pv4: {
        width: '55%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: SCREEN_HEIGHT - 200

    },
    btn: {
        borderColor: colors.themeColor,
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: SCREEN_WIDTH - 95,
        backgroundColor: colors.white,
        flexDirection: 'row',
        borderRadius: 10,


    },

});