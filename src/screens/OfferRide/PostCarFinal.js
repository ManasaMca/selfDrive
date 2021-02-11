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

const PostCarFinal = (props) => {
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
          style={[styles.titleView]}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.text1, { flex: 1 }]}>Post Your Car</Text>

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

        <View style={{ bottom: 90,  margin: 10,alignItems:'center' }}>
        <TouchableOpacity
            style={[styles.btn]}
              onPress={() => navigation.navigate('Home')} >
             <Text style={[styles.btnText]}> Post Car</Text>
            </TouchableOpacity>
        </View>

      </SafeAreaView>
    </>
  );
};

export default memo(PostCarFinal);