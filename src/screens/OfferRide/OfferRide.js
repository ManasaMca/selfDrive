import React, { memo, useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import styles from './OfferRideStyles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, responsiveFontSize } from '../../stylesheet/responsiveSize';
import GetLocation from 'react-native-get-location';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_KEY } from '../../constants/apiendpoints'
import { getCityName } from '../../constants/utils';

const OfferRide = (props) => {
  const navigation = useNavigation();
  let fromLocation,
      fromLat,
      fromLong,
      fromCity
  const [initialRegion, setInitialRegion] = useState(null);

  const getCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        setInitialRegion({
          latitude: location ? location.latitude : 17.387140,
          longitude: location ? location.longitude : 78.491684,
           latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        });
      })
      .catch((error) => {
        const { code, message } = error;
      //  console.warn(code, message);
      });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

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
          <View style={{ flex: 1}}>
            <Text style={[styles.text1, { flex: 1 }]}>Get Your Car</Text>

          </View>

          <View style={{ backgroundColor: colors.white, marginTop: 10 }}>
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
                // console.log('details', details);
                fromLocation = details && details.formatted_address;
                fromLat = details && details.geometry.location.lat;
                fromLong = details && details.geometry.location.lng;
                fromCity = getCityName(details);
            
              }}
            />
          </View>
          </View>

          <View style={{ width: '100%', height: heightPercentageToDP('100%') - 60 }}>
          <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={initialRegion}
          />
        </View>
        <View
          style={[{
            flex: 1,
            width: '100%',
            padding: 10,
            position: 'absolute',
            top: 10,
            zIndex: 5,
          }]}>
       </View>
        <View style={styles.mm}>

        </View>


        <View style={styles.carview}>

          <View style={styles.carview2}>
            <Text style={styles.t1}>Rahul Sharma</Text>
            <View style={styles.v2}>
              <Image source={require('../../assets/image8.png')} style={styles.image1} />
              <Image source={require('../../assets/Vector.png')} style={styles.image2} />
            </View>
          </View>

          <View style={styles.carview2}>
            <Text style={styles.t1}>Rapid tech</Text>
            <View style={styles.v2}>
              <Image source={require('../../assets/image8.png')} style={styles.image1} />
              <Image source={require('../../assets/Vector.png')} style={styles.image2} />
            </View>
          </View>

          <View style={styles.carview2}>
            <Text style={styles.t1}>Mahesh</Text>
            <View style={styles.v2}>
              <Image source={require('../../assets/image8.png')} style={styles.image1} />
              <Image source={require('../../assets/Vector.png')} style={styles.image2} />
            </View>
          </View>

          <View style={{ bottom: 90 }}>
            <TouchableOpacity
              //  onPress={() => navigateToRegisteredCars()}
              onPress={() => navigation.navigate('AvailableCars')}
            >
              <Image source={AppConstants.Next} alt="" />
            </TouchableOpacity>
          </View>


        </View>

      </SafeAreaView>
    </>
  );
};

export default memo(OfferRide);
