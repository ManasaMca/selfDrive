import React, { memo, useState, useRef, useEffect } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, Linking, TouchableOpacity, StyleSheet, } from 'react-native';
import colors from '../../stylesheet/colors';
import {
    responsiveHorizontalSize,
    responsiveVerticalSize,
    responsiveFontSize,
    SCREEN_HEIGHT,
    SCREEN_WIDTH
} from '../../stylesheet/responsiveSize';

import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';


const dialCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
        phoneNumber = 'tel:+91${6281683557}';
    }
    else {
        phoneNumber = 'telprompt:+91${6281683557}';
    }

    Linking.openURL(phoneNumber);
};

const shareToWhatsAppWithContact = () => {
    let phoneNumber = '+916281683557'
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
};


const Support = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <SafeAreaView style={{ flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT, backgroundColor: 'white' }}>

                <View style={styles.pv1} >
                    <Image source={require('../../assets/Ryder.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                    <Text style={styles.title}>RYDER-SELF DRIVE</Text>
                </View>

                <View style={styles.container} >

                    <View style={styles.pv2} >
                        <Animatable.View
                            animation='fadeInLeft'
                            duration={2000}
                            useNativeDriver={true}
                            direction="alternate"
                        >
                            <TouchableOpacity style={styles.btn}
                            // onPress={() => dialCall()} activeOpacity={0.7} 
                            >

                                <View style={styles.pv3}>
                                    <Icon2
                                        name={'phone'}
                                        size={30}
                                        color={colors.themeColor}
                                    />
                                </View>
                                <View style={styles.pv4}>
                                    <Text style={styles.text1} > Call Us</Text>

                                </View>

                            </TouchableOpacity>
                        </Animatable.View>
                    </View>

                    <View style={styles.pv2} >
                        <Animatable.View
                            animation='fadeInRight'
                            duration={2000}
                            useNativeDriver={true}
                            direction="alternate"
                        >
                            <TouchableOpacity style={styles.btn}
                            // onPress={() => shareToWhatsAppWithContact()}  
                            >

                                <View style={styles.pv3}>
                                    <Icon2
                                        name={'whatsapp'}
                                        size={30}
                                        color={colors.themeColor}
                                    />
                                </View>
                                <View style={styles.pv4}>
                                    <Text style={styles.text1} > Chat with us</Text>

                                </View>

                            </TouchableOpacity>
                        </Animatable.View>
                    </View>

                    <View style={styles.pv2} >
                        <Animatable.View
                            animation='fadeInLeft'
                            duration={2000}
                            useNativeDriver={true}
                            direction="alternate"
                        >
                            <TouchableOpacity style={styles.btn}
                            // onPress={() => Linking.openURL('mailto: inatripcarpooling@gmail.com')}
                            >

                                <View style={styles.pv3}>
                                    <Icon
                                        name={'mail'}
                                        size={30}
                                        color={colors.themeColor}
                                    />
                                </View>
                                <View style={styles.pv4}>
                                    <Text style={styles.text1} > Mail us</Text>

                                </View>

                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                </View>

            </SafeAreaView>
        </>
    );
};


export default memo(Support);

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
    pv3: {
        width: '35%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    pv4: {
        width: '60%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: responsiveFontSize(28),
        color: colors.themeColor,
        fontFamily: 'Geomanist',

    },
    text1: {
        marginHorizontal: responsiveHorizontalSize(2),
        fontSize: responsiveFontSize(18),
        color: colors.black,
        fontFamily: 'Geomanist',
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
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: SCREEN_HEIGHT - 200
    }
});