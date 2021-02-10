import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, CheckBox, TouchableOpacity, Image, ScrollView } from "react-native";
import * as Progress from 'react-native-progress';
import colors from '../../stylesheet/colors';
import { useRoute, useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import Icon1 from 'react-native-vector-icons/FontAwesome'; //liecense
import AvailableCars from "../OfferRide/availablecars";
import { carlist } from '../../Redux/selector/carselector';
import { useSelector, useDispatch } from 'react-redux';



const Registercar = (props) => {
    const navigation = useNavigation();
    const route = useRoute();
    const cars_list = useSelector(carlist);
    const ppcode = route.params.ppcode
    const p_mobile = route.params.p_mobile
    const p_location = route.params.p_location
    const p_city = route.params.p_city
    const p_state = route.params.p_state
    const [ac, setac] = useState(true);
    const [non_ac, setnon_ac] = useState(false);
    const [banner3, setbanner3] = useState('');
    const [banner33, setbanner33] = useState('');


    const [brand, setbrand] = useState();
    const [color, setcolor] = useState();
    const [year, setyear] = useState();
    const [carno, setcarno] = useState();
    const [seating, setseating] = useState();
    console.log("..................", cars_list)

    const submit = () => {
        console.log(ppcode, brand, color, year, carno, seating, ac, p_mobile, p_location, p_city, p_state)

        if (brand == '' || color == '' || year == '' || carno == '') {
            alert("Enter All Values")
        }
        else {

            fetch('http://udrive.b2bmart.org.in/api/add-car.php', {
                method: 'post',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    pcode: ppcode,
                    carregno: carno,
                    carname: brand,
                    seating: seating,
                    ac: ac,
                    color: color,
                    making_year: year,
                    mobilenumber: p_mobile,
                    street: p_location,
                    city: p_city,
                    state: p_state,
                    carpic: banner33
                })

            })
                .then((response) => response.json())
                .then(async (response) => {
                    const dataJSON = JSON.stringify(response)
                    const userToken1 = JSON.parse(dataJSON);
                    console.log('response', userToken1);

                    alert(userToken1.Message)
                })
                .catch((error) => {
                    console.error(error);
                });

        }

    }
    const non_ac1 = () => {
        setac(false)
        setnon_ac(true)
    }
    const ac1 = () => {
        setac(true)
        setnon_ac(false)
    }
    console.log("AC", ac, "NON-AC", non_ac)
    const handleChoosePhoto3 = () => {
        const options = {
            title: 'Banner',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source1111 = { uri: response.uri };
                const source = {
                    uri: 'data:' + response.fileName + ';base64,' + response.data,
                };
                setbanner3(source);
                setbanner33(source.uri);
            }
        });
    };

    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={{ top: 20 }}>

                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/BackWhite.png')} style={{ top: 15, marginLeft: -80 }} />
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
                        <TextInput style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginTop: 15, paddingBottom: 10 }}
                            value={brand}
                            onChangeText={(value) => setbrand(value)} />
                    </View>
                    <View style={{ margin: 20, marginTop: 30, width: 150, borderBottomWidth: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Color</Text>
                        <TextInput style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginTop: 15, paddingBottom: 10 }}
                            value={color}
                            onChangeText={(value) => setcolor(value)} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ margin: 20, marginTop: 30, width: 150, borderBottomWidth: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Making Year</Text>
                        <TextInput style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginTop: 15, paddingBottom: 10 }}
                            keyboardType={'numeric'}
                            value={year}
                            onChangeText={(value) => setyear(value)} />
                    </View>
                    <View style={{ margin: 20, marginTop: 30, width: 150, borderBottomWidth: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Car Number</Text>
                        <TextInput style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginTop: 15, paddingBottom: 10 }}
                            value={carno}
                            autoCapitalize={"characters"}
                            onChangeText={(value) => setcarno(value)} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <Text style={[styles.text2]}>
                        Seating
                    </Text>
                    <View style={[styles.container1]}>
                        <Picker
                            mode="dropdown"
                            style={{ width: 200 }}

                        >
                            <Picker.Item label="Select Seats" value="City" />


                        </Picker>
                    </View>
                    {/* <View style={{ margin: 20, marginTop: 30, width: 150, borderBottomWidth: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Seating</Text>
                        <TextInput style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginTop: 15, paddingBottom: 10 }}
                            keyboardType={'numeric'}
                            value={seating}
                            onChangeText={(value) => setseating(value)} />
                    </View> */}
                    {/* <View style={{ margin: 20, marginTop: 30, width: 150, borderBottomWidth: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Car Number</Text>
                        <TextInput style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginTop: 15, paddingBottom: 10 }}/>
                    </View> */}
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <CheckBox
                        color={colors.themeColor}
                        value={ac}
                        // onPress={() => ac1()}
                        onValueChange={() => ac1()}
                    /><Text style={{ top: 5 }}>AC</Text>

                    <CheckBox
                        color={colors.themeColor}
                        style={{ marginLeft: 50 }}
                        value={non_ac}

                        onValueChange={() => non_ac1()}
                    /><Text style={{ top: 5 }}>Non-AC</Text>
                </View>
                {/* 
                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Upload Documents</Text>
                    <Text style={{ fontSize: 15 }}>Upload your Fitness, Insurance, and Pollution card of Driver</Text>
                </View>

                <View style={{ height: 50, borderWidth: 1, borderColor: 'lightgray', width: 280, borderRadius: 10, alignSelf: 'center' }}>
                    <TouchableOpacity><Text style={{ color: 'green', alignSelf: 'center', top: 10, fontWeight: 'bold', fontSize: 15 }}>Upload your documents here</Text></TouchableOpacity>
                </View> */}

                <View style={[styles.docView]}>
                    <View style={[styles.docContainer]}>
                        <Icon1 name={'drivers-license-o'} color={colors.themeColor} size={30} />
                    </View>
                    <View style={{ flex: 5, paddingLeft: 10 }}>
                        <Text style={[styles.text3]}> Car Photo</Text>
                    </View>

                </View>
                <View style={{ marginTop: '1%' }}>
                    {banner3 == '' ? (
                        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 50 }}>
                            <Icon1
                                name={'photo'} color={colors.themeColor}
                                size={90}
                                style={[styles.img]} />
                            <TouchableOpacity
                                style={styles.btnStyle}
                                onPress={() => handleChoosePhoto3()}
                            >
                                <Text style={styles.btnTextCamera}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                            <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 50 }}>
                                <Image
                                    source={banner3}
                                    style={[styles.img]} />
                                <TouchableOpacity
                                    style={styles.btnStyle}
                                    onPress={() => handleChoosePhoto3()}
                                >
                                    <Text style={styles.btnTextCamera}>Upload</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                </View>

                <TouchableOpacity onPress={() => submit()}>
                    <View style={{ height: 50, backgroundColor: colors.themeColor, width: 300, borderRadius: 10, alignSelf: 'center' }}>

                        <Text style={{ color: 'white', alignSelf: 'center', top: 15, fontWeight: 'bold', fontSize: 20 }}>
                            Save
                        </Text>

                    </View>
                </TouchableOpacity>

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
    btnStyle: {
        backgroundColor: colors.themeColor,
        //  padding: 10,
        height: 50,
        width: 130,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 50,
    },
    btnStyle1: {
        backgroundColor: colors.themeColor,
        // padding:10,
        height: 50,
        width: 190,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTextCamera: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 17,
        fontFamily: 'Geomanist',

    },
    docView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        paddingTop: 20,
        flexWrap: 'wrap'
    },
    docContainer: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
    },
    text3: {
        fontSize: 17,
        fontWeight: '500',
        fontFamily: 'Geomanist'
    },
    img: {
        width: 100,
        height: 100,
        marginTop: 5,
        marginRight: 10,
        borderRadius: 20,
        resizeMode: 'contain'
    },

    text2: {
        padding: 10,
        fontFamily: 'Geomanist',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.black,
    },

    container1: {
        marginHorizontal: 10,
        width: '55%',
        borderColor: colors.dimGrey,
        borderRadius: 10,
        borderWidth: 1,
        height: 60
    },
});


