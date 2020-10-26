import React, { memo, useState, useEffect } from 'react';
import { Animated, SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Linking, Image, TouchableOpacity, TextInput, Clipboard } from 'react-native';
import { TextField, } from 'react-native-material-textfield';
import colors from '../../stylesheet/colors';
import { AppConstants } from "../../constants/appconstants";
import styles from './UserProfileStyles';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import { doGetCarsRequest, doGetDriverRequest, doProfileOtpRequest, doProfileRequest } from '../../state/actions'
import { Picker } from '@react-native-community/picker'
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs'
import { responsiveFontSize } from '../../stylesheet/responsiveSize';
import { getFCMToken, saveMobileNumber } from '../../utils/AsyncStorageHelper'
import { AppOkAlert } from '../../constants/utils';
import { doProfile, updateProfile } from '../../state/api';
import Loader from '../../components/Loader';
import { BASE_URL } from '../../constants/apiendpoints';
import { isArray } from 'util';

const UserProfile = ({ navigation }) => {
    // console.log('getuser', getUser)
    // //console.log('getCars', getCars)
    // const fieldRef = React.createRef();

    // //console.log('drivers', drivers)
    // const [selectedValue, setSelectedValue] = useState('');
    // const profileCode = getUser && getUser.data[0].pcode ? getUser.data[0].pcode : '';
    // const [name, setName] = useState(getUser && getUser.data[0].name ? getUser.data[0].name : '')
    // const [isSomethingChange, setSomethingChange] = useState(false);
    // const [email, setEmail] = useState(getUser && getUser.data[0].email ? getUser.data[0].email : '')
    // const [mobileno, setMobileno] = useState(getUser && getUser.data[0].mobileno ? getUser.data[0].mobileno : '');
    // const [profileBase64, setProfileBase64] = useState(getUser && getUser.data[0].profilepic ? getUser.data[0].profilepic : '')
    // const [proUrl, setProurl] = useState('')
    // const [proimage, setProimage] = useState(getUser && getUser.data[0].profilepic ? getUser.data[0].profilepic : '');
    // const [proimageBase64, setProimageBase64] = useState(undefined);

    // const [loading, setLoading] = useState(false);

   
    // const [selectedCarData, setSelectedCarData] = useState(undefined);
    // const dispatch = useDispatch()
  

    

    // const handelDocProfile = async () => {
    //     try {
    //         const res = await DocumentPicker.pick({
    //             type: [DocumentPicker.types.allFiles]
    //         });
    //         setLoading(true);
    //         setProurl(res.uri)
    //         var profileimageData = await RNFS.readFile(res.uri, 'base64').then(res => { return res });
    //         //setProimage(res.uri)
    //         setProimageBase64(`data:${res.type};base64,${profileimageData}`)
    //         const fcmToken = await getFCMToken();
    //         const data = {
    //             ...getUser.data[0],
    //             profilepic: `data:${res.type};base64,${profileimageData}`,
    //             deviceid: fcmToken
    //         };
    //         console.log('handelDocProfile data', data);

    //         const apiRes = await updateProfile(data);
    //         setLoading(false);
    //         console.log("apiRes :- ", apiRes);
    //         if (apiRes.statusCode == 1) {
    //             AppOkAlert(apiRes.message, () => {
    //             })
    //         } else {
    //             AppOkAlert(apiRes.message, () => {

    //             })
    //         }
    //     } catch (err) {
    //         if (DocumentPicker.isCancel(err)) {
    //         } else {
    //             throw err;
    //         }
    //     }

    // }
    // const getValues = async () => {


      
    //     setLoading(true);
    //     const data = {
    //         ...getUser.data[0],
    //         name: name,
    //         profilepic: undefined
    //     };
    //     const apiRes = await updateProfile(data);
    //     setLoading(false);
    //     console.log("apiRes :- ", apiRes);
    //     if (apiRes.statusCode == 1) {
    //         AppOkAlert(apiRes.message, () => {
    //         })
    //     } else {
    //         AppOkAlert(apiRes.message, () => {

    //         })
    //     }
    //     console.log('data', data)
    //     //dispatch(doProfileRequest(data));
    //     //navigation.navigate('SignUp')
    // }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
            <SafeAreaView >
                <ScrollView style={{ backgroundColor: colors.themeColor }}>
                    <View style={[styles.TitleView]} >
                        {loading && <Loader loading={loading} />}

                        <Text style={[styles.titleText]}>Profile</Text>

                    </View>
                    <View style={[styles.pv1]}>
                        <View style={[styles.imgContainer]}>
                            {/* <Image style={ [styles.img] } source={ AppConstants.DriverImg } /> */}
                            <TouchableOpacity style={[styles.profileImg]}
                               // onPress={() => handelDocProfile()}
                            >
                                {/* {!proimageBase64 && !proimage ? <Image
                                    style={[styles.profilePic]}
                                    source={AppConstants.Profile}
                                /> :
                                    <Image
                                        style={[styles.profilePic]}
                                        source={{
                                            uri: proimageBase64 ? proimageBase64 : `${BASE_URL}${proimage}`,
                                        }}
                                    />} */}
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.viewContainer]}>
                            <View style={[styles.inputView]}>
                                <View style={[styles.inputContainer]}>
                                    <Text style={{ color: colors.dimGrey }}>{'Name'}</Text>
                                    <TextInput style={[styles.textinput]}
                                        keyboardType="default"
                                      //  value={name}
                                        placeholderTextColor={colors.black}
                                        // onChangeText={(e) => {
                                        //     setName(e)
                                        //     setSomethingChange(true);
                                        // }}
                                        // ref={fieldRef}
                                    />
                                </View>
                                <View style={[styles.inputContainer]}>
                                    <Text style={{ color: colors.dimGrey }}>{'Email'}</Text>
                                    <TextInput style={[styles.textinput]}
                                    //value={email}
                                        keyboardType="email-address"
                                        placeholder={'example@gmail.com'}
                                        placeholderTextColor={colors.black}
                                        // onChangeText={(e) => setEmail(e)}
                                        // ref={fieldRef}
                                    />
                                </View>
                                <View style={[styles.inputContainer]}>
                                    <Text style={{ color: colors.dimGrey }}>{'Mobile'}</Text>
                                    <TextInput style={[styles.textinput]}
                                        keyboardType="number-pad"
                                        placeholder={ '1234567890'}
                                        placeholderTextColor={colors.black}
                                        editable={false}
                                        // onChangeText={(e) => setMobileno(e)}
                                        // ref={fieldRef}
                                    />
                                </View>
                                <View>
                                    <Text style={[styles.carText]}> My Cars </Text>
                                </View>
                                <View style={[styles.carView]}>

                                    <View style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }} >

                                        <TouchableOpacity >

                                            <View style={{ width: '90%' }}>

                                                 <Picker
                                                    style={{ height: 20 }}
                                                    selectedValue={selectedValue}
                                                 
                                                >
                                                    
                                                            <Picker.Item  />
                                                       
                                                </Picker> 
                                               
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
                                    <TouchableOpacity style={{ padding: 10, }} onPress={() => navigation.navigate('Registercar')}>
                                        <Text style={[styles.addCarText]}>  Add New Car +</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                            

                                           
                                               
                                  
                                    <TouchableOpacity                                
                                        onPress={() => {
                                            saveMobileNumber('');
                                            navigation.reset({
                                                index: 0,
                                                routes: [{ name: 'Login' }]
                                            })
                                        }}
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


const mapStateToProps = (state) => {
    return {
        //getCars: state.rideReducer.getCarsResult && state.rideReducer.getCarsResult,
        getUser: state.appReducer.userLoginResult,

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getCars: (doGetCarsRequest) => dispatch(rewardsDetails(doGetCarsRequest)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(UserProfile))