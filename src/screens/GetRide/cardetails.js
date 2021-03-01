import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppConstants } from '../../constants/appconstants';
import colors from "../../stylesheet/colors";
import styles from './cardetailsStyles'

const Cardetails = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
            <ScrollView style={{ flex: 1 }} >
                <View style={styles.container}>
                    <View >

                        <View style={styles.text1}>
                            <Text style={styles.heatdtext}>
                                 Details
                        </Text>
                        </View>

                    </View>
                </View>

                <View style={styles.view1}>

                    <View style={styles.view6}>
                        <Text style={styles.text5}>Name</Text>
                        <Text style={styles.text6}>Mahesh</Text>
                    </View>

                    <View style={styles.view6}><Text style={styles.text5}>Mobile</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View><Text style={styles.text6}>+91-0000112233</Text></View>
                            <View style={styles.view7}>
                                <TouchableOpacity>
                                    <Icon
                                        name={'phone'}
                                        size={30}
                                        color={colors.blue}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.view6}><Text style={styles.text5}>Street Address</Text>
                        <Text style={styles.text6}>Secunderabad</Text>
                    </View>

                    <View style={styles.view6}><Text style={styles.text5}>City</Text>
                        <Text style={styles.text6}>Hyd</Text>
                    </View>

                    <View style={styles.view6}><Text style={styles.text5}>State/Region</Text>
                        <Text style={styles.text6}>Telangana/Hindhu</Text>
                    </View>

                </View>
            </ScrollView>
        </>
    );
}
export default Cardetails;





