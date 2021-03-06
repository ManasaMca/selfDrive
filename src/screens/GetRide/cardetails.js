import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "../../stylesheet/colors";
import styles from './cardetailsStyles'
import { Linking } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';

const Cardetails = ({ route }) => {
    const navigation = useNavigation();
    const call = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "cust_pcode": "RYDR11021312568",
                "car_pcode": route.params.carpcode,
                "mobile": route.params.mobile
            })
        };
        fetch('http://api.ryder.org.in/call_record.php', requestOptions)
            .then(response => {
                console.log(response)
                Linking.openURL(`tel:${route.params.mobile}`)
            })

    }
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
            <ScrollView  >
                <View style={styles.container}>

                    <Text style={styles.heatdtext}>
                        Details
                    </Text>

                </View>

                <View style={styles.view1}>

                    <View style={styles.view6}>
                        <Text style={styles.text5}>Name</Text>
                        <Text style={styles.text6}>{route.params.pname}</Text>
                    </View>

                    <View style={styles.view6}><Text style={styles.text5}>Mobile</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View><Text style={styles.text6}>{route.params.mobile}</Text></View>
                            <View style={styles.view7}>
                                <TouchableOpacity onPress={() => call()
                                }>
                                    <Icon
                                        name={'phone'}
                                        size={30}
                                        color={colors.blue}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.view6}><Text style={styles.text5}>Location</Text>
                        <Text style={styles.text6}>{route.params.location != "" ? route.params.location : route.params.city}</Text>
                    </View>

                    <View style={styles.view6}><Text style={styles.text5}>City</Text>
                        <Text style={styles.text6}>{route.params.city}</Text>
                    </View>

                    <View style={styles.view6}><Text style={styles.text5}>State/Region</Text>
                        <Text style={styles.text6}>{route.params.state}</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.button2}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.button}>Close</Text></TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </>
    );
}
export default Cardetails;





