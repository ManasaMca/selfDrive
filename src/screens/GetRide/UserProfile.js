import React, { memo, useState, useEffect } from 'react';
import { Animated, SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Linking, Image, TouchableOpacity, TextInput, Clipboard } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from "../../constants/appconstants";
import styles from './UserProfileStyles';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';

import {
    pcode,
    fname,
    lname,
    mobile,
    email,
    location,
    city,
    state,
    longitude,
    latitude,
    profilepic

} from '../../Redux/selector/userselector';
import { carlist } from '../../Redux/selector/carselector';
import { car_fetch_action } from '../../Redux/action/caraction';



const UserProfile = ({ navigation }) => {
    const dispatch = useDispatch();
    const cars_list = useSelector(carlist);
    const ppcode = useSelector(pcode);
    const ffname = useSelector(fname);
    const llname = useSelector(lname);
    const mmobile = useSelector(mobile);
    const eemail = useSelector(email);
    const llocation = useSelector(location);
    const ccity = useSelector(city);
    const sstate = useSelector(state);
    const llogitude = useSelector(longitude);
    const llatitude = useSelector(latitude);
    const pprofilepic = useSelector(profilepic);

    const [p_fname, setfname] = useState(ffname);
    const [p_lname, setlname] = useState(llname);
    const [p_email, setemail] = useState(eemail);
    const [p_mobile, setmobile] = useState(mmobile);
    const [p_location, setlocation] = useState(llocation);
    const [p_city, setcity] = useState(ccity);
    const [p_state, setstate] = useState(sstate);

    useEffect(() => {
        console.log("dispatch", ppcode)
        dispatch(
            car_fetch_action({
                ppcode
            }),
        );

    })





    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
            <SafeAreaView >
                <ScrollView style={{ backgroundColor: colors.themeColor }}>
                    <View style={[styles.TitleView]} >
                        <Text style={[styles.titleText]}>Profile</Text>

                    </View>
                    <View style={[styles.pv1]}>
                        <View style={[styles.imgContainer]}>
                            <Image style={[styles.img]} source={AppConstants.DriverImg} />
                            <TouchableOpacity style={[styles.profileImg]}
                            // onPress={() => handelDocProfile()}
                            >

                            </TouchableOpacity>
                        </View>
                        <View style={[styles.viewContainer]}>
                            <View style={[styles.inputView]}>
                                <View style={{ flexDirection: 'row', margin: 10 }}>
                                    <View style={{ width: '47%', marginLeft: 10, borderBottomColor: colors.black, borderBottomWidth: 1 }}>

                                        <Text style={{ color: colors.dimGrey }}>{'First Name'}</Text>
                                        <TextInput style={[styles.textinput]}
                                            keyboardType="default"
                                            value={p_fname}
                                            onChangeText={(value) => setfname(value)}
                                            placeholderTextColor={colors.black}

                                        />
                                    </View>
                                    <View style={{ width: '47%', marginLeft: 10, borderBottomColor: colors.black, borderBottomWidth: 1 }}>

                                        <Text style={{ color: colors.dimGrey }}>{'Last Name'}</Text>
                                        <TextInput style={[styles.textinput]}
                                            keyboardType="default"
                                            value={p_lname}
                                            onChangeText={(value) => setlname(value)}

                                            placeholderTextColor={colors.black}

                                        />
                                    </View>
                                </View>
                                <View style={[styles.inputContainer]}>
                                    <Text style={{ color: colors.dimGrey }}>{'Email'}</Text>
                                    <TextInput style={[styles.textinput]}
                                        value={p_email}
                                        onChangeText={(value) => setemail(value)}
                                        keyboardType="email-address"
                                        placeholderTextColor={colors.black}

                                    />
                                </View>
                                <View style={[styles.inputContainer]}>
                                    <Text style={{ color: colors.dimGrey }}>{'Mobile'}</Text>
                                    <TextInput style={[styles.textinput]}
                                        keyboardType="number-pad"
                                        value={p_mobile}
                                        onChangeText={(value) => setmobile(value)}
                                        placeholderTextColor={colors.black}

                                    />
                                </View>
                                <View style={{ flexDirection: 'row', margin: 10 }}>
                                    <View style={{ width: '47%', marginLeft: 10, borderBottomColor: colors.black, borderBottomWidth: 1 }}>

                                        <Text style={{ color: colors.dimGrey }}>{'City'}</Text>
                                        <TextInput style={[styles.textinput]}
                                            keyboardType="default"
                                            value={p_city}
                                            onChangeText={(value) => setcity(value)}
                                            placeholderTextColor={colors.black}

                                        />
                                    </View>
                                    <View style={{ width: '47%', marginLeft: 10, borderBottomColor: colors.black, borderBottomWidth: 1 }}>

                                        <Text style={{ color: colors.dimGrey }}>{'State'}</Text>
                                        <TextInput style={[styles.textinput]}
                                            keyboardType="default"
                                            value={p_state}
                                            onChangeText={(value) => setstate(value)}
                                            placeholderTextColor={colors.black}

                                        />
                                    </View>
                                </View>
                                <View style={[styles.inputContainer]}>
                                    <Text style={{ color: colors.dimGrey }}>{'Location'}</Text>
                                    <TextInput style={[styles.textinput]}
                                        value={p_location}
                                        onChangeText={(value) => setlocation(value)}
                                        placeholderTextColor={colors.black}

                                    />
                                </View>
                                <View>
                                    <Text style={[styles.carText]}> My Cars </Text>
                                </View>
                                <View style={[styles.carView]}>

                                    <View style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }} >

                                        <TouchableOpacity >

                                            <View style={{ width: '90%' }}>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={[styles.deleteView]}>
                                        <TouchableOpacity >
                                            <Image source={AppConstants.Edit} alt="" />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                                <View>
                                    <TouchableOpacity style={{ padding: 10, }} onPress={() => navigation.navigate('Registercar', { ppcode, p_mobile, p_location, p_city, p_state })}>
                                        <Text style={[styles.addCarText]}>  Add New Car +</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity

                                        style={[styles.btnStyle]} >

                                        <Text style={[styles.btnText]}>
                                            LogOut
                                    </Text>
                                    </TouchableOpacity>


                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
};





export default memo(UserProfile)