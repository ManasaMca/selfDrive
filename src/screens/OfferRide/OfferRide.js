import React, { memo, useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import GetLocation from 'react-native-get-location';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import { API_KEY } from '../../constants/apiendpoints';
import { getCityName } from '../../constants/utils';
import styles from './OfferRideStyles';
import { useRoute, useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast'
import { isNullOrUndefined } from 'util';
import { heightPercentageToDP, responsiveFontSize } from '../../stylesheet/responsiveSize';

const OfferRide = (props) => {
  // const route = useRoute();
  const navigation = useNavigation();
  // console.log(props.route);
  // const passengers = route.params.passengers;  //navigation.getParam('passengers');
  // const date = route.params.date; //navigation.getParam('date');
  // const endTime = route.params.endTime; //navigation.getParam('endTime');
  // const price = route.params.price; //navigation.getParam('price');

  //const [initialRegion, setInitialRegion] = useState(null);
  // let fromLocation,
  //   whereLocation,
  //   fromLat,
  //   fromLong,
  //   whereLat,
  //   whereLong,
  //   fromCity,
  //   whereCity;

  // const navigateToRegisteredCars = () => {
  //   if (isNullOrUndefined(fromLocation)) {
  //     Toast.show('select the from location', Toast.SHORT);
  //     return;
  //   }
  //   if (isNullOrUndefined(whereLocation)) {
  //     Toast.show('select the where location', Toast.SHORT);
  //     return;
  //   }
  //   navigation.navigate('RegisteredCars', {
  //     passengers,
  //     date,
  //     endTime,
  //     fromLocation,
  //     whereLocation,
  //     fromLat,
  //     fromLong,
  //     whereLat,
  //     whereLong,
  //     price,
  //     fromCity,
  //     whereCity,
  //   });
  // };

  // const getCurrentLocation = () => {
  //   GetLocation.getCurrentPosition({
  //     enableHighAccuracy: true,
  //     timeout: 15000,
  //   })
  //     .then((location) => {
  //       setInitialRegion({
  //         latitude: location ? location.latitude : 28.5273342,
  //         longitude: location ? location.longitude : 77.1389452,
  //         latitudeDelta: 0.0922,
  //         longitudeDelta: 0.0421,
  //       });
  //     })
  //     .catch((error) => {
  //       const { code, message } = error;
  //       console.warn(code, message);
  //     });
  // };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.lightWhite} />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={[{
            flex: 1,
            width: '100%',
            padding: 10,
            position: 'absolute',
            top: 10,
            zIndex: 5,
          }]}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <Text style={[styles.text1, { flex: 1 }]}>Find Car</Text>

          </View>

          <View style={{ backgroundColor: colors.white, marginTop: 10 }}>
            <GooglePlacesAutocomplete
              placeholder="From To?"
              minLength={2}
              listViewDisplayed={true}
              enablePoweredByContainer={false}
              // autoFocus={false}
              // returnKeyType={'search'}
              // fetchDetails={true}
              // debounce={200}
              // nearbyPlacesAPI="GooglePlacesSearch"
              // query={{
              //   key: API_KEY,
              //   language: 'en',
              //   // types: '(cities)',
              // }}
              // styles={{
              //   container: {},
              //   textInputContainer: styles.roundedBoxContainer,
              //   textInput: styles.textInputStyle,
              //   predefinedPlacesDescription: {
              //     color: '#1faadb',
              //   },
              // }}
              // onPress={(data, details = null) => {
              //   // console.log('data', data);
              //   // console.log('details', details);
              //   fromLocation = details && details.formatted_address;
              //   fromLat = details && details.geometry.location.lat;
              //   fromLong = details && details.geometry.location.lng;
              //   fromCity = getCityName(details);
              // }}
            />
          </View>
         
        </View>
        <View style={{ width: '100%', height: heightPercentageToDP('100%') - 60 }}>
          <MapView
            style={{ flex: 1 }}
            // provider={PROVIDER_GOOGLE}
            // showsUserLocation
            // initialRegion={initialRegion}
          />
        </View>
       

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', bottom:50 }}>
          <View style={{ width: 100, height: 70, backgroundColor: 'white', bottom: 100, borderRadius: 10 }}>
            <Text style={{ margin: 5, fontWeight: 'bold' }}>Rahul Sharma</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/image8.png')} style={{ height: 30, width: 60 }} />
              <Image source={require('../../assets/Vector.png')} style={{ height: 20, width: 20, top: 10 }} />
            </View>
          </View>
          <View style={{ width: 100, height: 70, backgroundColor: 'white', bottom: 100, borderRadius: 10 }}>
            <Text style={{ margin: 5, fontWeight: 'bold' }}>Rapid tech</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/image8.png')} style={{ height: 30, width: 60 }} />
              <Image source={require('../../assets/Vector.png')} style={{ height: 20, width: 20, top: 10 }} />
            </View>
          </View>
          <View style={{ width: 100, height: 70, backgroundColor: 'white', bottom: 100, borderRadius: 10 }}>
            <Text style={{ margin: 5, fontWeight: 'bold' }}>Mahesh</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/image8.png')} style={{ height: 30, width: 60 }} />
              <Image source={require('../../assets/Vector.png')} style={{ height: 20, width: 20, top: 10 }} />
            </View>
          </View>

          <View style={{bottom:90}}>
          <TouchableOpacity 
        //  onPress={() => navigateToRegisteredCars()}
          onPress={() => navigation.navigate('AvailableCars')}
          >
            <Image source={AppConstants.Next} alt="" />
          </TouchableOpacity>
        </View>
          

          </View>
{/*        
        <View style={[styles.nextView, { position: 'absolute', bottom: 70 }]}>
          <TouchableOpacity 
        //  onPress={() => navigateToRegisteredCars()}
          onPress={() => navigation.navigate('RegisteredCars')}
          >
            <Image source={AppConstants.Next} alt="" />
          </TouchableOpacity>
        </View> */}
      </SafeAreaView>
    </>
  );
};

export default memo(OfferRide);
