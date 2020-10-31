import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView , StatusBar} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppConstants } from '../../constants/appconstants';
import colors from "../../stylesheet/colors";
import styles from './cardetailsStyles'

const Cardetails = () => {
    return (
        <>
         <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
        <ScrollView  style={{ flex: 1 }} >
            <View style={styles.container}>
                <View style={{ top: 20 }}>

                    <View style={styles.text1}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: colors.white, textAlign: 'center' }}>
                            Car Details
                        </Text>
                    </View>

                </View>
            </View>

            <View style={{ backgroundColor: 'white', top: -40, height: 1000, borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>


                <View style={{ margin: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}>AR Travels</Text></View>

                <View style={{ alignSelf:'center',flexDirection: 'row', justifyContent: 'center', alignItems:'center', backgroundColor: 'white', height: 80, width: '90%', borderRadius: 10, elevation: 15 }}>
                   <View style={{justifyContent:'center' ,width:'40%'}}>
                    <Image   source={AppConstants.RedCar}
                        style={{ height: 50, width: 100,  }} />
                        </View>
                        <View style={{justifyContent:'center' ,width:'50%',flexDirection:'row'}}>
                    <Text style={{  fontSize: 20, fontWeight: 'bold' }}>Car</Text>
                    <Text style={{  fontSize: 20, fontWeight: 'bold' }}>AP 01 ED 1234</Text>
                </View>
                </View>
                <View style={{ margin: 20, borderBottomWidth: 1 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Travels Name</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 15, paddingBottom: 10 }}>ABC Travels</Text>
                </View>

                <View style={{ margin: 20, borderBottomWidth: 1 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Name</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 15, paddingBottom: 10 }}>Mahesh</Text>
                </View>

                <View style={{ margin: 20, borderBottomWidth: 1 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Office Number</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 15, paddingBottom: 10 }}>040-2255887711</Text></View>
                        <View style={{ marginLeft: 200, top: 10 }}>
                            <TouchableOpacity>
                                <Icon name="phone" size={30} color="blue" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ margin: 20, borderBottomWidth: 1 }}><Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Mobile</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View><Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 15, paddingBottom: 10 }}>+91-0000112233</Text></View>
                        <View style={{ marginLeft: 200, top: 10 }}>
                            <TouchableOpacity>
                                <Icon name="phone" size={30} color="blue" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ margin: 20, borderBottomWidth: 1 }}><Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Street Address</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 15, paddingBottom: 10 }}>Secunderabad</Text>
                </View>

                <View style={{ margin: 20, borderBottomWidth: 1 }}><Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>City</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 15, paddingBottom: 10 }}>Hyd</Text>
                </View>

                <View style={{ margin: 20, borderBottomWidth: 1 }}><Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>State/Region</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 15, paddingBottom: 10 }}>Telangana/Hindhu</Text>
                </View>

            </View>
        </ScrollView>
        </>
    );
}
export default Cardetails;





