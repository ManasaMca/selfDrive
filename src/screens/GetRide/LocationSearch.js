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
import { getCityName, getStateName } from '../../constants/utils';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_KEY } from '../../constants/apiendpoints';
import { useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from '../../stylesheet/responsiveSize';


const LocationSearch = ({ navigation }) => {
    const dispatch = useDispatch();
    const route = useRoute();
    const {onGetLocation} = route.params;

  if(true){
    return <SafeAreaView  backgroundColor={colors.white} style={{flex:1,  backgroundColor: colors.white, height: '100%'}}>
              <View style={{flex:1,  backgroundColor: colors.white, height: '100%'}}>
                  <View style={{width: '100%', height: RFValue(60, 740), flexDirection: 'row', 
                    justifyContent:'center',
                      alignItems: 'center',
                      backgroundColor: colors.white
                      }}>
                    <View style={[styles.pv1]}>
                        <TouchableOpacity
                            onPress={() => navigation.pop()} >
                            <Image source={AppConstants.BackArrow} alt="" />
                        </TouchableOpacity>
                    </View>
                    <View style={ [styles.logoView] }>
                      <Image
                          source={require('../../assets/Ryder.png')}
                          style={{width:50,height:50,borderRadius:50}}
                        />
                    </View>
                  </View>  
                  <View style={[styles.lineView]} />
                  <View style={{
                      width: widthPercentageToDP('100%') -  RFValue(20, 740),
                      height: heightPercentageToDP('100%') - RFValue(60, 740),  
                      backgroundColor:colors.white, 
                      marginTop:  RFValue(10, 740),
                      marginHorizontal:  RFValue(10, 740)
                      }}>
                <GooglePlacesAutocomplete
                  placeholder="From To ?"
                  minLength={2}
                  listViewDisplayed={true}
                  enablePoweredByContainer={false}
                  autoFocus={false}
                  returnKeyType={'search'}
                  fetchDetails={true}
                  debounce={200}
                  nearbyPlacesAPI="GooglePlacesSearch"
                  query={{
                    key: API_KEY,
                    language: 'en',
                    components: 'country:IN',
                    // types: '(cities)',
                  }}
                  styles={{
                    container: {},
                    textInputContainer: styles.roundedBoxContainer,
                    textInput: styles.textInputStyle,
                    predefinedPlacesDescription: {
                      color: '#1faadb',
                    },
                  }}
                  onPress={(data, details = null) => {
                    // console.log('data', data);
                    console.log('details', JSON.stringify(details));
                    let fromLocation = details && details.formatted_address;
                    let fromLat = details && details.geometry.location.lat;
                    let fromLong = details && details.geometry.location.lng;
                    let fromCity = getCityName(details);
                    let fromState = getStateName(details);
                    console.log("location :- ", fromLocation, fromLat, fromLong, fromCity);
                    // setLati(details.geometry.location.lat)
                    // setLongi(details.geometry.location.lng)
                    // setCity(details.address_components[0].long_name)
                    // setLocation(details.formatted_address)
                    onGetLocation(fromLocation, fromLat, fromLong, fromCity, fromState);
                    navigation.pop();
                  }}
                />
            </View>
              </View>
    </SafeAreaView>
  }
};


export default memo(LocationSearch);
