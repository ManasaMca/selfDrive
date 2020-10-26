import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, CheckBox, TouchableOpacity, Image, ScrollView } from "react-native";
import * as Progress from 'react-native-progress';
import colors from '../../stylesheet/colors';



const Registercar = () => {
    const [isSelected, setSelection] = useState(false);
    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={{ top: 20 }}>

                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/BackWhite.png')} style={{ top: 15, marginLeft: -100 }} />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
                            Register Car
                        </Text>
                    </View>

                </View>
            </View>

            <View style={{ backgroundColor: 'white', top: -40, height: 850, borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ margin: 20, marginTop: 30, width: 150, borderBottomWidth: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Brand&Model</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginTop: 15, paddingBottom: 10 }}>Maruthi Suzuki</Text>
                    </View>
                    <View style={{ margin: 20, marginTop: 30, width: 150, borderBottomWidth: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Color</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginTop: 15, paddingBottom: 10 }}>Blue</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ margin: 20, marginTop: 30, width: 150, borderBottomWidth: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Making Year</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginTop: 15, paddingBottom: 10 }}>2019</Text>
                    </View>
                    <View style={{ margin: 20, marginTop: 30, width: 150, borderBottomWidth: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Car Number</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginTop: 15, paddingBottom: 10 }}>Ts 02 EE 1233</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <CheckBox
                    color={colors.themeColor}
                        value={isSelected}
                        onValueChange={setSelection}
                    /><Text style={{ top: 5 }}>AC</Text>

                    <CheckBox
                      color={colors.themeColor}
                        style={{ marginLeft: 50 }}
                        value={isSelected}
                        onValueChange={setSelection}
                    /><Text style={{ top: 5 }}>Non-AC</Text>
                </View>

                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Upload Documents</Text>
                    <Text style={{ fontSize: 15 }}>Upload your Fitness, Insurance, and Pollution card of Driver</Text>
                </View>

                <View style={{ height: 50, borderWidth: 1, borderColor: 'lightgray', width: 280, borderRadius: 10, alignSelf: 'center' }}>
                    <TouchableOpacity><Text style={{ color: 'green', alignSelf: 'center', top: 10, fontWeight: 'bold', fontSize: 15 }}>Upload your documents here</Text></TouchableOpacity>
                </View>

                <View style={{ margin: 20, borderBottomWidth: 1, flexDirection: 'row' }}>
                    <Image 
                    source={require('../../assets/rcdoc.png')} style={{ height: 30, width: 40, top: 10 }} />
                    <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 15, marginTop: 15, paddingBottom: 15 }}>ABC Travels</Text>
                    <Progress.Bar progress={0.5} style={{ height: 8, top: 22, left: 20, width: 130, borderColor:'lightgray', }} />
                    <Image 
                   // source={require('../images/wrong.png')} 
                    style={{ height: 20, marginLeft: 40, width: 20, top: 15 }} />
                    {/* <Image source={require('../images/wrong.png')} style={{ height: 30, width: 40, top: 10 }} /> */}
                </View>

                <View style={{ margin: 20, borderBottomWidth: 1, flexDirection: 'row' }}>
                    <Image  source={require('../../assets/rcdoc.png')} style={{ height: 30, width: 40, top: 10 }} />
                    <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 15, marginTop: 15, paddingBottom: 15 }}>ABC Travels</Text>
                    <Progress.Bar progress={0.5} style={{ height: 8, top: 22, left: 20, width: 130, borderColor:'lightgray', }} />
                    <Image 
                   // source={require('../images/wrong.png')} 
                    style={{ height: 20, marginLeft: 40, width: 20, top: 15 }} />
                </View>

                <View style={{ margin: 20, borderBottomWidth: 1, flexDirection: 'row' }}>
                    <Image  source={require('../../assets/rcdoc.png')} style={{ height: 30, width: 40, top: 10 }} />
                    <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 15, marginTop: 15, paddingBottom: 15 }}>ABC Travels</Text>
                    <Progress.Bar progress={0.5} style={{ height: 8, top: 22, left: 20, width: 130, borderColor:'lightgray', }} />
                    <Image 
                   // source={require('../images/wrong.png')} 
                    style={{ height: 20, marginLeft: 40, width: 20, top: 15 }} />
                </View>

                <View style={{ margin: 20, borderBottomWidth: 1, flexDirection: 'row' }}>
                    <Image source={require('../../assets/rcdoc.png')} style={{ height: 30, width: 40, top: 10 }} />
                    <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 15, marginTop: 15, paddingBottom: 15 }}>ABC Travels</Text>
                    <Progress.Bar progress={0.5} style={{ height: 8, top: 22, left: 20, width: 130, borderColor:'lightgray', }} />
                    <Image 
                   // source={require('../images/wrong.png')} 
                    style={{ height: 20, marginLeft: 40, width: 20, top: 15 }} />
                </View>

                <View style={{ height: 50, backgroundColor: colors.themeColor, width: 300, borderRadius: 10, alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ color: 'white', alignSelf: 'center', top: 15, fontWeight: 'bold', fontSize: 15 }}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}
export default Registercar;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        paddingBottom: 80,
        alignItems: "center",
        backgroundColor: colors.themeColor
    },

});


