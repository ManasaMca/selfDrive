import React, { memo, useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text,TextInput, Image, TouchableOpacity, Button, ScrollView, Alert} from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from "../../constants/appconstants";
import styles from './UserSignUpStyles';

const UserSignUp = ({ navigation }) => {
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('');



    const submit = () =>{
        if(fname=='' || lname==''|| email==''|| mobile==''){
            alert("Enter All Values")
        }
        else{

        fetch('http://udrive.b2bmart.org.in/api/add-profile.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
                fname:fname,
                lname:lname,
                email:email,
                mobile: mobile,
                profilepic:''
			})
			
        })
        .then((response) => response.json())
		 .then(async (response)=>{
            const dataJSON = JSON.stringify(response)
            // console.log('response', dataJSON);
            // await AsyncStorage.setItem('userToken',dataJSON);
			navigation.navigate('OfferRideTab', {
                                    
                screen: 'SignUp'
            });
		 })
		 .catch((error)=>{
		 console.error(error);
         });

        }

    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <SafeAreaView backgroundColor={colors.white}>
                <ScrollView>
                    <View style={[styles.flex_row]} >
                        <View style={[styles.pv1]}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('OTPVerification')} >
                                <Image source={AppConstants.BackArrow} alt="" />
                            </TouchableOpacity>
                        </View>
                        <View style={ [styles.logoView] }>
                      
                        <Text>
                            Logo
                        </Text>
                    </View>
                    </View>
                    <View style={[styles.lineView]} />
                   

                    <View>
                        <Text style={[styles.text1]} >
                            Confirm Your Infromation
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row',margin:10 }}>

                        <View style={{ width: '47%' ,marginLeft:10,borderBottomColor:colors.black,borderBottomWidth:1}}>
                                <TextInput
                                    value={fname}
                                    onChangeText={(value) => setfname(value)} 
                                    placeholder="First Name"
                                    placeholderTextColor="black"
                                
                                />
                        </View>          
                        <View style={{ width: '47%' ,marginLeft:10, borderBottomColor:colors.black,borderBottomWidth:1}}>
                            <TextInput
                                    value={lname}
                                    onChangeText={(value) => setlname(value)} 
                                    placeholder="Last Name"
                                    placeholderTextColor="black"
                                
                            />

                        </View>
                    </View>
                    <View style={[styles.mobileView]}>
                        <View style={{ width: '100%' ,borderBottomColor:colors.black,borderBottomWidth:1,marginTop:10}}>
                            <TextInput 
                                    value={email}
                                    onChangeText={(value) => setemail(value)}
                                    keyboardType="email-address"
                                    placeholder="Your Email Address"
                                    placeholderTextColor="black"
                                
                                />
                        </View>
                    </View>
                    <View style={[styles.mobileView]}>
                        <View style={{ width: '100%' ,borderBottomColor:colors.black,borderBottomWidth:1,marginTop:10}}>
                            <TextInput 
                                    value={mobile}
                                    onChangeText={(value) => setmobile(value)}
                                placeholder="Mobile"
                                    keyboardType="number-pad"
                                    placeholderTextColor="black"
                                />
                        </View>
                    </View>
                    <View style={[styles.mobileView]}>
                        
                        <Text style={{fontSize:18,color:colors.dimGrey}}>Location</Text>
                    </View>
                    <View style={[styles.locContainer]}>

                    </View>
                    <View style={{flexDirection:'row', margin:10}}>
                        <View style={{width:'50%'}}>
                            <View style={[styles.mobileView]}>
                            
                                <Text style={{fontSize:18,color:colors.dimGrey}}>City</Text>
                            </View>
                            <View style={[styles.locContainer2]}>

                            </View>
                        </View>
                        <View style={{width:'50%'}}>
                            <View style={[styles.mobileView]}>
                                
                                <Text style={{fontSize:18,color:colors.dimGrey}}>State</Text>
                            </View>
                            <View style={[styles.locContainer2]}>

                            </View>
                        </View>
                    </View>
                    <View style={[styles.condnView]}>
                        <View style={{ width: '80%',  }}>
                            <Text style={{ fontSize: 15, color: colors.dimGrey }}>
                                By continuing, I confirm that I have read and agree to the
                               
                                <TouchableOpacity>
                                    <Text style={{ color: colors.themeColor , }}>
                                        Terms & Conditions   
                                    </Text>
                                </TouchableOpacity>
                              
                                <Text style={{ fontSize: 15, color: colors.dimGrey }}>
                               And
                                </Text>
                                <TouchableOpacity>
                                    <Text style={{ color: colors.themeColor , }}>
                                         Privacy Policy .
                                    </Text>
                                </TouchableOpacity>
                            </Text>
                        </View>

                        <View style={[styles.nextView]}>
                            <TouchableOpacity 
                            // onPress={ () => handleButtonPress() }
                            //   onPress={() => {
                            //      navigation.navigate('OfferRideTab', {
                                    
                            //         screen: 'SignUp'
                            //     })}}
                            onPress={() => submit()}
                            >
                                <Image source={AppConstants.Next} alt="" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
};


export default memo(UserSignUp);