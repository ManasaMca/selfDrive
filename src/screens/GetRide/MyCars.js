import React, { useState, useEffect } from "react";
import { View,Alert, Picker, StyleSheet, Text, TextInput, StatusBar, CheckBox, TouchableOpacity, Image, ScrollView, FlatList, SafeAreaView } from "react-native";
import BASE_URL from '../../constants/apiendpoints';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from '../OfferRide/availablecarsStyles';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { carlist } from '../../Redux/selector/carselector';
import { pcode } from '../../Redux/selector/userselector';
import { useSelector, useDispatch } from 'react-redux';
import { avail_car_fetch_action } from '../../Redux/action/availablecars';
import { heightPercentageToDP, responsiveFontSize, widthPercentageToDP } from "../../stylesheet/responsiveSize";
import { car_fetch_action } from '../../Redux/action/caraction';


const MyCars = ({ route }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const ppcode = useSelector(pcode);
    const cars_list = useSelector(carlist);
    console.log("raj data" + JSON.stringify(cars_list))
    console.log(route.params.car)

    const delete_car = (carregno,index) => {
        fetch('http://api.ryder.org.in/delete_car.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                carregno: carregno
            })

        })
        .then((response) => response.json())
		 .then(async (response)=>{
            const dataJSON = JSON.stringify(response)          
            console.log('response', JSON.stringify(cars_list));
            delete cars_list[index];
            Alert.alert(
                "Ryder - Delete car",
                response.message,
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
			
		 })
		 .catch((error)=>{
		 console.error(error);
         });
           
    }
    useEffect(()=>{
        dispatch(
            car_fetch_action({
                ppcode
            }),
        );
    })
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
                    {cars_list.map((car, index) => (
                        <View style={styles.view1,{borderWidth:2,borderColor:colors.salmonred,borderRadius:15,margin:10}}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: widthPercentageToDP(35), alignItems: 'center', justifyContent: 'center', margin: 10, }}>

                                    <Image
                                        source={car.capic == "" ? require('../../assets/image7.png') : { uri: "http://api.ryder.org.in/" + car.capic }}
                                        style={styles.car} />
                                </View>
                                <View style={{ margin: 10, width: widthPercentageToDP(50), justifyContent:'center'}}>

                                    <Text style={styles2.txt}>{car.carname}</Text>
                                    <Text style={styles2.txt} key={Math.floor(Math.random() * 100) + 1}>{car.carregno}</Text>


                                </View>

                            </View>
                            <View style={styles2.container}>
                                <TouchableOpacity style={styles2.button1}>
                                <Icon
                                    name='edit'
                                    type='font-awesome'
                                    color={colors.white}
                                    size={20}
                                    style={{marginleft:5}}
                                    >
                                    <Text>  Edit</Text>
                                    </Icon>
                                   
                                </TouchableOpacity>
                                
                                <TouchableOpacity 
                                    style={styles2.button2} 
                                    onPress={()=>delete_car(car.carregno,index)}>
                                    <Icon
                                    name='trash'
                                    type='font-awesome'
                                    color={colors.white}
                                    size={20}
                                    style={{marginleft:5}}
                                    >
                                    <Text>  Delete</Text>
                                   </Icon>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}

                    <View style={{ width: 150, backgroundColor: 'white' }} />
                </ScrollView>
            </View>

        </>
    );
}

const styles2 = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:"row",
      justifyContent: "center",
      paddingHorizontal: 10,
      alignItems:'stretch'
    },
    button1: {
      alignItems: "center",
      backgroundColor:colors.blue,
      padding: 10,
      width:150,
      borderRadius:10,
      margin:15
      
    },
    button2: {
        alignItems: "center",
        backgroundColor:colors.danger,
        padding: 10,
        width:150,
        borderRadius:10,
        margin:15
      },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    heading:{
        fontSize:responsiveFontSize(20),
        color:colors.white
    },
    txt:{
        fontSize:20,
        color:colors.suvaGrey
    }
  });
export default MyCars;



