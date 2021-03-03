import React, { memo, useState, useEffect } from 'react';
import { Animated, SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Linking, Image, TouchableOpacity, TextInput, Clipboard } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from "../../constants/appconstants";
import styles from './UserProfileStyles';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { getFCMToken, saveMobileNumber } from '../../utils/AsyncStorageHelper'
import ImagePicker from 'react-native-image-picker';
import { Picker } from 'native-base';

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
import { users_update } from '../../Redux/action/useraction';



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
    const [car, setCar] = useState('');
    const [editable, seteditable] = useState(false)
    const [banner3, setbanner3] = useState('');
    const [banner33, setbanner33] = useState('');

    useEffect(() => {
        console.log("dispatch", pprofilepic)
        dispatch(
            car_fetch_action({
                ppcode
            }),
        );


    }, [])

    const updateProfile = () => {
        dispatch(
            users_update({
                fname: p_fname,
                lname: p_lname,
                email: p_email,
                pcode: ppcode,
                mobile: p_mobile,
                location: p_location,
                city: p_city,
                state: p_state,
                profilepic: banner33
            })
        )
    }

    const handelDocProfile = () => {
        const options = {
            title: 'Banner',
            storageOptions: {
                skipBackup: true,
                path: 'images',

            },
            includeBase64:false,
            quality: 0.1
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
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
            <SafeAreaView >
                <ScrollView style={{ backgroundColor: colors.themeColor }}>
                    <View style={[styles.TitleView]} >
                        <Text style={[styles.titleText]}>Profile</Text>

                    </View>
                    <View style={[styles.pv1]}>



                        <TouchableOpacity onPress={() => handelDocProfile()} style={[styles.imgContainer]}>
                            {
                                banner3=='' ? <Image style={[styles.img]} source={pprofilepic == 'NA' ? AppConstants.DriverImg : { uri: "http://api.ryder.org.in/" + pprofilepic }} /> :
                                <Image style={[styles.img]} source={banner3} />
                            }

                            {/* <Image style={[styles.img]} source={banner3==''?(pprofilepic == 'NA' ? AppConstants.DriverImg : { uri: "http://api.ryder.org.in/" + pprofilepic }):banner3} /> */}


                        </TouchableOpacity>

                        {/* <TouchableOpacity onPress={() => console.log('ashdasgjdh')} style={[styles.imgContainer]}>

                            <Image style={[styles.img]} source={AppConstants.DriverImg} />

                        </TouchableOpacity> */}

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
                                            editable={editable}
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

                                    <TextInput style={[styles.textinput]}
                                        value={p_email}
                                        onChangeText={(value) => setemail(value)}
                                        keyboardType="email-address"
                                        placeholderTextColor={colors.black}
                                        editable={editable}
                                    />
                                </View>
                                <View style={[styles.inputContainer]}>

                                    <TextInput style={[styles.textinput]}
                                        keyboardType="number-pad"
                                        value={p_mobile}
                                        onChangeText={(value) => setmobile(value)}
                                        placeholderTextColor={colors.black}
                                        editable={editable}
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
                                            editable={editable}
                                        />
                                    </View>
                                    <View style={{ width: '47%', marginLeft: 10, borderBottomColor: colors.black, borderBottomWidth: 1 }}>

                                        <Text style={{ color: colors.dimGrey }}>{'State'}</Text>
                                        <TextInput style={[styles.textinput]}
                                            keyboardType="default"
                                            value={p_state}
                                            onChangeText={(value) => setstate(value)}
                                            placeholderTextColor={colors.black}
                                            editable={editable}
                                        />
                                    </View>
                                </View>
                                <View style={[styles.inputContainer]}>
                                    <Text style={{ color: colors.dimGrey }}>{'Location'}</Text>
                                    <TextInput style={[styles.textinput]}
                                        value={p_location}
                                        onChangeText={(value) => setlocation(value)}
                                        placeholderTextColor={colors.black}
                                        editable={editable}
                                    />
                                </View>
                                <View>
                                    <Text style={[styles.carText]}> My Cars </Text>
                                    <View style={[styles.container]}>
                                        <Picker
                                            mode="dropdown"
                                            style={{ width: 200 }}
                                            selectedValue={car}
                                            onValueChange={value => setCar(value)}
                                        >
                                            <Picker.Item label="Select Car" value="City" />
                                            {cars_list.map((car, index) => (


                                                <Picker.Item key={index + car.carregno} label={car.carregno} value={car.carregno} />

                                            ))}

                                        </Picker>
                                    </View>

                                </View>
                                <View style={[styles.carView]}>

                                    <View style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }} >

                                        <TouchableOpacity >

                                            <View style={{ width: '90%' }}>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    {/* <View style={[styles.deleteView]}>
                                        <TouchableOpacity >
                                            <Image source={AppConstants.Edit} alt="" />
                                        </TouchableOpacity>
                                    </View> */}

                                </View>
                                <View>
                                    <TouchableOpacity style={{ padding: 10, }} onPress={() => navigation.navigate('Registercar', { ppcode, p_mobile, p_location, p_city, p_state })}>
                                        <Text style={[styles.addCarText]}>  Add New Car +</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            saveMobileNumber('');
                                            // navigation.reset({
                                            //     index: 0,
                                            //     routes: [{ name: 'Login' }]
                                            // })
                                            navigation.navigate('Login')

                                        }}
                                        style={[styles.btnStyle]} >

                                        <Text style={[styles.btnText]}>
                                            LogOut
                                    </Text>
                                    </TouchableOpacity>


                                </View>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            if (editable)
                                                updateProfile()
                                            else
                                                seteditable(true)
                                        }}
                                        style={[styles.btnStyle]} >

                                        <Text style={[styles.btnText]}>
                                            {editable ? 'Update' : 'Edit'}
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