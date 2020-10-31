import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput,StatusBar, CheckBox, TouchableOpacity, Image, ScrollView } from "react-native";
//import * as Progress from 'react-native-progress';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import { useRoute, useNavigation } from '@react-navigation/native';



const AvailableCars = () => {
    const navigation = useNavigation();
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
        <ScrollView  style={{ flex: 1 }} >
            <View style={styles.container}>
                <View style={{ top: 30 }}>

                    <View style={{ flexDirection: 'row',marginLeft:10  }}>
                        <TouchableOpacity>
                            <Image 
                            source={require('../../assets/BackWhite.png')}
                             style={{ top: 15 }} />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 30, fontWeight: 'bold', color:colors.white, marginLeft:20}}>
                            Available Cars
                        </Text>
                    </View>
                </View>  
            </View>

            <View style={{backgroundColor:'lightgray', height:800}}>

            <View style={{height:'25%', width:'85%',backgroundColor:'white', alignSelf:'center', borderRadius:5, marginTop:20}}>
               <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <View>
                    <View style={{flexDirection:'row', top:10}}>
                    <Image source={require('../../assets/DriverImg.png')} style={{ height:20, width:20, top:2 }} />
                    <Text style={{fontWeight:'bold', fontSize:18, color:'black', marginLeft:10}}>AR Travels</Text>
                    </View>
                    <Image source={require('../../assets/image8.png')} style={{ height:80, width:150, top:20 }} />
                </View>
                <View>
                    <Text style={{fontSize:15, fontWeight:'bold', color:'black', top:10}}>Rs: 2000/Day</Text>
                    <View style={{top:20}}><Text style={{fontSize:15, }}>Driver Provision</Text>
                    <Text style={{fontSize:15, }}>Maruthi Swift Dzire</Text>
                    <Text style={{fontSize:15, }}>Hyderabad</Text>
                    <Text style={{fontSize:15, }}>28 July | 06:00 AM</Text>
                    <Text style={{fontSize:15, }}>Negotiable</Text></View>
                    <TouchableOpacity style={{height:40,marginTop:25, width:140, backgroundColor:colors.themeColor, borderRadius:5}}
                      onPress={() => navigation.navigate('Cardetails')}
                    >
                        <Text style={{alignSelf:'center', paddingTop:10, color:'white'}}>View Details</Text></TouchableOpacity>
                </View>
                </View>
                
            </View>

            <View style={{height:'25%', width:'85%',backgroundColor:'white', alignSelf:'center', borderRadius:5, marginTop:20}}>
               <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <View>
                    <View style={{flexDirection:'row', top:10}}>
                    <Image source={require('../../assets/DriverImg.png')} style={{ height:20, width:20, top:2 }} />
                    <Text style={{fontWeight:'bold', fontSize:18, color:'black', marginLeft:10}}>AR Travels</Text>
                    </View>
                    <Image source={require('../../assets/image9.png')} style={{ height:80, width:140, top:20 }} />
                </View>
                <View>
                    <Text style={{fontSize:15, fontWeight:'bold', color:'black', top:10}}>Rs: 2000/Day</Text>
                    <View style={{top:20}}><Text style={{fontSize:15, }}>Driver Provision</Text>
                    <Text style={{fontSize:15, }}>Maruthi Swift Dzire</Text>
                    <Text style={{fontSize:15, }}>Hyderabad</Text>
                    <Text style={{fontSize:15, }}>28 July | 06:00 AM</Text>
                    <Text style={{fontSize:15, }}>Negotiable</Text></View>
                    <TouchableOpacity style={{height:40,marginTop:25, width:140, backgroundColor:colors.themeColor, borderRadius:5}}
                     onPress={() => navigation.navigate('Cardetails')}
                    >
                        <Text style={{alignSelf:'center', paddingTop:10, color:'white'}}>View Details</Text></TouchableOpacity>
                </View>
                </View>
                
            </View>

            <View style={{height:'25%', width:'85%',backgroundColor:'white', alignSelf:'center', borderRadius:5, marginTop:20}}>
               <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <View>
                    <View style={{flexDirection:'row', top:10}}>
                    <Image source={require('../../assets/DriverImg.png')} style={{ height:20, width:20, top:2 }} />
                    <Text style={{fontWeight:'bold', fontSize:18, color:'black', marginLeft:10}}>AR Travels</Text>
                    </View>
                    <Image source={require('../../assets/image7.png')} style={{ height:80, width:150, top:20 }} />
                </View>
                <View>
                    <Text style={{fontSize:15, fontWeight:'bold', color:'black', top:10}}>Rs: 2000/Day</Text>
                    <View style={{top:20}}><Text style={{fontSize:15, }}>Driver Provision</Text>
                    <Text style={{fontSize:15, }}>Maruthi Swift Dzire</Text>
                    <Text style={{fontSize:15, }}>Hyderabad</Text>
                    <Text style={{fontSize:15, }}>28 July | 06:00 AM</Text>
                    <Text style={{fontSize:15, }}>Negotiable</Text></View>
                    <TouchableOpacity style={{height:40,marginTop:25, width:140, backgroundColor:colors.themeColor, borderRadius:5}}
                      onPress={() => navigation.navigate('Cardetails')}
                    >
                        <Text style={{alignSelf:'center', paddingTop:10, color:'white'}}>View Details</Text></TouchableOpacity>
                </View>
                </View>
                
            </View>
            

            </View>

        </ScrollView>
        </>
    );
}
export default AvailableCars;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 90,
        paddingBottom: 80,
        backgroundColor: colors.themeColor
    },
  

});


