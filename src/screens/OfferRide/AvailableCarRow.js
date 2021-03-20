import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './availablecarsStyles';
import { useNavigation } from '@react-navigation/native';



export default function AvailableCarRow({ ac, carname, carpcode, carpic, city, driver_facility,
    location, mobile, negotiation, offerprice, pname, profilepic, seating }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Cardetails', {
                ac, carname, carpcode, carpic, city, driver_facility,
                location, mobile, negotiation, offerprice, pname, profilepic, seating
            })}
            style={{
                flex: 1, backgroundColor: "white", flexDirection: 'row', margin: 12, padding: 16,
                borderRadius: 8
            }}>
            <Image source={carpic == null ? require('../../assets/image7.png') : { uri: "http://api.ryder.org.in/" + carpic }} style={{
                width: 100, height: 100, borderRadius: 50, backgroundColor: 'grey'
            }} />

            <View style={{ flexDirection: 'column', flex: 3, marginStart: 18 }}>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{carname}</Text>
                <Text style={{ fontSize: 16, color: 'black', marginTop: 4 }}>₹ {offerprice}</Text>
                <Text style={{ fontSize: 16, color: 'black', marginTop: 4 }}>{mobile}</Text>
                <Text style={{ fontSize: 16, color: 'black', marginTop: 4 }}>{location}</Text>
            </View>
        </TouchableOpacity>
    )
}
