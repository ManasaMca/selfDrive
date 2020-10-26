import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, StatusBar, FlatList, ActivityIndicator, Alert, } from 'react-native';
import { connect } from 'react-redux';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import { doGetCarsRequest, doOfferRideRequest, doGetDriverRequest } from '../../state/actions';
import styles from './RegisteredCarStyles';
import { ScrollView } from 'react-native-gesture-handler';
import Loader from '../../components/Loader';
import { useNavigation } from '@react-navigation/native';
import { isNullOrUndefined } from 'util';
import { widthPercentageToDP } from 'react-native-responsive-screen';

class RegisteredCars extends React.PureComponent {
  // constructor (props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   const { navigation, route } = this.props;
  //   console.log(navigation);
  //   this.passengers = route.params.passengers; //navigation.getParam('passengers');
  //   this.date = route.params.date;  //navigation.getParam('date');
  //   this.endTime = route.params.endTime; //navigation.getParam('endTime');
  //   this.price = route.params.price; //navigation.getParam('price');
  //   this.fromLocation = route.params.fromLocation;//navigation.getParam('fromLocation');
  //   this.whereLocation = route.params.whereLocation; //navigation.getParam('whereLocation');
  //   this.fromLat = route.params.fromLat; //navigation.getParam('fromLat');
  //   this.fromLong = route.params.fromLong; //navigation.getParam('fromLong');
  //   this.whereLat = route.params.whereLat; //navigation.getParam('whereLat');
  //   this.whereLong = route.params.whereLong; //navigation.getParam('whereLong');
  //   this.fromCity = route.params.fromCity; //navigation.getParam('fromCity');
  //   this.whereCity = route.params.whereCity; //navigation.getParam('whereCity');
  //   let userData = this.props.mobile
  //   let profileCode = userData[0].pcode
  //   const data = {
  //     pcode: profileCode,
  //   };
  //   console.log('data 1st', data)
  //   this.props.doGetCarsRequest(data);
  //   this.props.doGetDriverRequest(data);
  // }

  // fetchCarsDriver = async() => {
  //   let userData = this.props.mobile
  //   let profileCode = userData[0].pcode
  //   const data = {
  //     pcode: profileCode,
  //   };
  //   this.props.doGetCarsRequest(data);
  //   this.props.doGetDriverRequest(data);
  // }

  // doOfferRide = (item) => {

  //   let userData = this.props.mobile
  //   let mobile = userData[0].mobileno
  //   let pinCode = userData[0].pcode
  //   const data = {
  //     pcode: pinCode,
  //     carregno: item.carregno,
  //     from_stn: this.fromLocation,
  //     from_stn_long: this.fromLong,
  //     from_stn_lat: this.fromLat,
  //     from_city: this.fromCity,
  //     to_stn: this.whereLocation,
  //     to_stn_long: this.whereLong,
  //     to_stn_lat: this.whereLat,
  //     to_city: this.whereCity,
  //     ridedatetime: this.date, //+ ' ' + this.time,
  //     rideExpectedEndTime: this.endTime,
  //     fare_per_pas: parseInt(this.price, 10),
  //     noofpassengers: this.passengers,
  //     dmobileno: mobile,
  //     tripdescription: 'Happy Journey',
  //   };
  //   console.log('data 2nd', data)
  //   //this.props.doOfferRideRequest(data);
  //   const { navigation } = this.props;
  //   navigation.navigate("PostTripStackNavigator", {
  //     params: {
  //       carData: data
  //     },
  //     screen: 'PostTrip'
  //   });
  // };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.offerRideResult !== this.props.offerRideResult) {
  //     this.props.offerRideResult && this.showAlert(this.props.offerRideResult);
  //   }
  // }

  // getAlertMsg = (offerRideResult) => {
  //   if (offerRideResult && offerRideResult.RideOfferId) {
  //     return `${offerRideResult.Message}. Your ride id is ${offerRideResult.RideOfferId}`;
  //   } else {
  //     return offerRideResult && offerRideResult.Message;
  //   }
  // };

  // showAlert = (offerRideResult) => {
  //   Alert.alert(
  //     'Success',
  //     this.getAlertMsg(offerRideResult),
  //     [
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           //this.props.navigation.navigate('RegisteredCars');
  //         },
  //       },
  //     ],
  //     { cancelable: false },
  //   );
  // };

  //renderListItem = ({ item }) => {
   // return (
      // <View style={ [styles.pv2] }>
      //   <View style={ { flexDirection: 'row' } }>
      //     <View style={ [styles.img] }>
      //       <Image 
      //           source={ !isNullOrUndefined(item.carimageurl) && item.carimageurl != ''  ? {uri: `http://api.inatrip.in/api/${item.carimageurl}` } :  AppConstants.Cedan   } 
      //           style={{
      //             width: widthPercentageToDP('35%'),
      //             height: 100,
      //             resizeMode: 'contain'
      //           }}
      //           resizeMode={'contain'}
      //           alt={ item.carname } />
      //       {/* <Image source={ { uri: `data:image/gif;base64,${item.carpic}` } } alt={ item.carname } /> */ }
      //     </View>
      //     <View style={ [styles.pv3] }>
      //       <View>
      //         <Text style={ [styles.text3] }>RegNo: { item.carregno }</Text>
      //       </View>
      //       <View>
      //         <Text style={ [styles.text4] }>
      //           { item.carname } { item.model }
      //         </Text>
      //       </View>
      //       <View>
      //         <Text style={ [styles.text5] }>Model: { item.make_year }</Text>
      //       </View>
      //       <View>
      //         <Text style={ [styles.text5] }>Color: { item.carcolor }</Text>
      //       </View>
      //     </View>
      //   </View>
      //   <View style={ [styles.btnView] }>
      //     <TouchableOpacity
      //       style={ [styles.button2] }
      //       onPress={ () => this.doOfferRide(item) }>
      //       <Text style={ styles.btn2_txt }>Select</Text>
      //     </TouchableOpacity>
      //   </View>
      // </View>
  //  );
 // };

  render() {
   // console.log(this.props.getCarsResult);

    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor={ colors.themeColor }
        />
        
        <SafeAreaView style={ { flex: 1, backgroundColor: colors.lightGrey } }>
        <ScrollView>
          <View style={ [styles.header] }>
            <View style={ [styles.pv1] }>
              <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
                <Image source={ AppConstants.BackWhite } alt="" />
              </TouchableOpacity>
            </View>
            <View style={ { alignItems: 'center', justifyContent: 'center' } }>

              <Text style={ [styles.text1] }>Registered Cars</Text>
            </View>
          </View>
          <View
            style={ [styles.btnView1] }>
            <TouchableOpacity style={ [styles.button1] }
             //onPress={() => this.props.navigation.navigate('RegisterCar', {fetchCarsDriver: this.fetchCarsDriver}) }
             >
              <Text style={ [styles.btn1_text] }> + Add New Car</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom:80}}>
          {/* { this.props.isLoading ? (
            <Loader loading={true}/>
          ) : (
            this.props.getCarsResult && this.props.getCarsResult.length != 0 ?    <FlatList
                data={ this.props.getCarsResult }
                renderItem={ this.renderListItem }
                keyExtractor={ (item) => item.carregno }
              />: <View style={{flex:1, marginTop:20, justifyContent:'center', alignItems:'center'}}>
              <Text style={{ fontSize: 16, color: colors.themeColor, marginBottom: 20 }}>No cars registered ,please add New car.</Text>
            </View>
            ) } */}
            </View>
         </ScrollView>
        </SafeAreaView> 
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   try{
//     console.log('State--', state.appReducer.userLoginResult.data);
//     var test = state.appReducer.userLoginResult.data;
//     console.log('1', test[0].mobileno)
//     return {
//       isLoading: state.rideReducer && state.rideReducer.isLoading,
//       getCarsResult:
//         state.rideReducer &&
//         state.rideReducer.getCarsResult &&
//         state.rideReducer.getCarsResult.result,
//       offerRideResult: state.rideReducer && state.rideReducer.offerRideResult,
//       mobile: state.appReducer.userLoginResult.data
  
//     };
//   }catch(err){
//     return {
//       isLoading: false,
//       getCarsResult:[],
//       offerRideResult: undefined,
//       mobile: undefined
  
//     };
//   }
  
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     doOfferRideRequest: (data) => dispatch(doOfferRideRequest(data)),
//     doGetCarsRequest: (data) => dispatch(doGetCarsRequest(data)),
//     doGetDriverRequest: (data) => dispatch(doGetDriverRequest(data)),
//   };
// };

export default
//  connect(mapStateToProps, mapDispatchToProps)
(RegisteredCars);
