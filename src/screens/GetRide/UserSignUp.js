import React, { memo, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text,TextInput, Image, TouchableOpacity, Button, ScrollView, Alert} from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from "../../constants/appconstants";
import styles from './UserSignUpStyles';
import GetLocation from 'react-native-get-location';
import { FlatList } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { getAutoSuggestionAPI } from '../../state/api';
import AsyncStorage from '@react-native-community/async-storage';
import {users_fetch_action} from '../../Redux/action/useraction';
import {useSelector, useDispatch} from 'react-redux'
import Toast from 'react-native-simple-toast'


const UserSignUp = ({ navigation }) => {
    const dispatch = useDispatch();
  const [fromValue,setFromValue] = useState(null)
  const [whereValue,setWhereValue] = useState(null)
  const [fromSugesstionList, setFromSuggestionList] = useState([])
  const [toggleFromWhereList , setToggleFromWhereList] = useState(-1)
  const [whereSugesstionList, setWhereSuggestionList] = useState([])
  const [fromLocation, setFromLocation] = useState('')
  const [fromLat, setFromLat] = useState('')
  const [fromLong, setFromLong] = useState('')

  const [whereLat, setWhereLat] = useState('')
  const [whereLong, setWhereLong] = useState('')
  const [fromCity, setFromCity] = useState('')
  const [whereCity, setWhereCity] = useState('')

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setemail] = useState('');
    const [mobileEdit, setMobileEdit] = useState('');
    const [location, setlocation] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');

    const [initialRegion, setInitialRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });


      const getCurrentLocation = () => {
        GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000,
        })
          .then((location) => {
            setInitialRegion({
              latitude: location ? location.latitude : 28.5273342,
              longitude: location ? location.longitude : 77.1389452,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
          })
          .catch((error) => {
            const { code, message } = error;
            console.warn(code, message);
          });
      };
    
      useEffect(() => {
        getCurrentLocation();
      }, []);
      const renderFromSuggestionList  =({item}) =>{
  
        return(
      
    <Text 
    style={[styles.text3]}
    onPress={(value) =>{
           
             setFromValue(item.label)
             setFromLocation(item.label)
             setFromLat (37.78825)
             setFromLong(77.138945)
             setFromCity(item.address.city)
             setToggleFromWhereList(-1)
          }}> {item.label}</Text>
         
        )
      }


      const getAutoSugesstion = async (query, type) =>{
        const result = await getAutoSuggestionAPI(query);
        console.log(result)
        if(result != null){
          if(type == 'from'){
            setFromSuggestionList(result['suggestions'])
          } else if(type == 'where'){
            setWhereSuggestionList(result['suggestions'])
          }
          
        }
       
      }
    



    const submit = () =>{
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       if (reg.test(email) === false) {
           Alert.alert(
               "Error",
               "Email is incorrect",
               [

                   { text: "OK", onPress: () => navigation.navigate('UserSignUp') }
               ],
               { cancelable: false }
           );
           return;

       }
       else {
           setemail(email)
         //  console.log("Email is Correct");
       }
       const isFnameValid = /^[A-z]+$/.test(fname)
       const isLnameValid = /^[A-z]+$/.test(lname)
       if (isFnameValid !== true && isLnameValid ) {
           Alert.alert(
               "Error",
               "Name is incorrect",
               [

                   { text: "OK", onPress: () => navigation.navigate('UserSignUp') }
               ],
               { cancelable: false }
           );
           return;

       }
       else {
           setfname(fname)
           setlname(lname)
         //  console.log("Name is Correct");
       }

       if(fname == ''){
            Toast.show('Please enter First Name', Toast.SHORT);
            return;
       }

       if(mobileEdit == '' || mobileEdit.length < 10){
        Toast.show('Please enter mobile number', Toast.SHORT);
        return;
        }
        
        if(mobileEdit.length < 10){
            Toast.show('mobile number should be 10 Character', Toast.SHORT);
            return;
            
        }

       if(lname == ''){
            Toast.show('Please enter Last Name', Toast.SHORT);
            return;
        }

        if(email == ''){
            Toast.show('Please enter Email', Toast.SHORT);
            return;
        }
        if(city == ''){
            Toast.show('Please enter City', Toast.SHORT);
            return;
        }
        else{

        fetch('http://api.ryder.org.in/add-profile.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
                fname:fname,
                lname:lname,
                email:email,
                mobile: mobileEdit,
                location:fromLocation,
                city:city,
                state:state,
                longitude:fromLong,
                latitude:fromLat,
                profilepic:''
			})

        })
        .then((response) => response.json())
		 .then(async (response)=>{
            const dataJSON = JSON.stringify(response)
            console.log('response', dataJSON);
            // await AsyncStorage.setItem('userToken',dataJSON);
            const userToken1 =JSON.parse(dataJSON);
            const userdata = userToken1.data
            console.log("....................................",userdata)
            dispatch(
                users_fetch_action({
                    userdata
                }),
              );
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
                    <View style={{backgroundColor:'white'}}>
                   

</View>

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
                                    //editable={true}
                                
                                />
                        </View>
                    </View>
                    <View style={[styles.mobileView]}>
                        <View style={{ width: '100%' ,borderBottomColor:colors.black,borderBottomWidth:1,marginTop:10}}>
                            <TextInput 
                                    value= {mobileEdit.replace(/[^0-9]/g, '')}
                                    onChangeText={(value) => setMobileEdit(value)}
                                placeholder="Mobile"
                                    keyboardType="number-pad"
                                    placeholderTextColor="black"
                                />
                        </View>
                    </View>
                    <View style={[styles.mobileView]}>
                        
                        <Text style={{fontSize:18,color:colors.dimGrey}}>Location</Text>
                    </View>
                    <View style={{ width: '100%' ,borderBottomColor:colors.black,borderBottomWidth:1,marginTop:10}}>
                    <TextInput
            placeholder="From To?"
            value={fromValue}
           
            onFocus={() =>{setToggleFromWhereList(0)}}
            style={{ backgroundColor:'white' }}
            onChangeText={text => {
              setFromValue(text)
             getAutoSugesstion(text,'from')
            }}
            >
                 </TextInput>
            { toggleFromWhereList == 0 ? ( 
              <FlatList
                data={fromSugesstionList}
                renderItem={renderFromSuggestionList}
                keyExtractor={(item ,index) => index}
              />
                ): null} 



                    {/* <TextInput 
                                    value={location}
                                    onChangeText={(value) => setlocation(value)}
                                placeholder="Location"
                                    placeholderTextColor="black"
                                /> */}
                    </View>
                    <View style={{flexDirection:'row', margin:10}}>
                        <View style={{width:'50%'}}>
                            <View style={[styles.mobileView]}>
                            
                                <Text style={{fontSize:18,color:colors.dimGrey}}>City</Text>
                            </View>
                            <View style={[styles.locContainer2]}>
                            <TextInput 
                                    value={city}
                                    onChangeText={(value) => setcity(value)}
                                placeholder="city"
                                    placeholderTextColor="black"
                                />
                            </View>
                        </View>
                        <View style={{width:'50%'}}>
                            <View style={[styles.mobileView]}>
                                
                                <Text style={{fontSize:18,color:colors.dimGrey}}>State</Text>
                            </View>
                            <View style={[styles.locContainer2]}>
                            <TextInput 
                                    value={state}
                                    onChangeText={(value) => setstate(value)}
                                placeholder="Location"
                                    placeholderTextColor="black"
                                />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.condnView]}>
                        <View style={{ width: '80%',  }}>
                            <Text style={{ fontSize: 15, color: colors.dimGrey }}>
                                By continuing, I confirm that I have read and agree to the
                               
                                <TouchableOpacity   onPress={() => navigation.navigate('TermsConditions')} 
                                style={{flexDirection:'row'}}>
                                    <Text style={{ color: colors.themeColor , }}>
                                        Terms & Conditions   
                                    </Text>
                                
                              
                                <Text style={{ fontSize: 15, color: colors.dimGrey }}>
                               And
                                </Text>
                               
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
