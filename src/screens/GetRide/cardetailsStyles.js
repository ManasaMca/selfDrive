import { StyleSheet } from 'react-native';
import colors from '../../stylesheet/colors';
import { heightPercentageToDP, responsiveFontSize } from '../../stylesheet/responsiveSize';

const styles = StyleSheet.create({

   container: {
      height: 100,
      alignItems: "center",
      backgroundColor: colors.themeColor,
   },
   heatdtext: {
      fontSize: 30,
      fontWeight: 'bold',
      color: colors.white,
      textAlign: 'center',
      fontFamily: 'Roboto-Regular'
   },
   view1: {
      backgroundColor: 'white',
      marginTop: -50,
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50
   },

   view5: {
      justifyContent: 'center',
      width: '50%',
      flexDirection: 'row'
   },
   view6: {
      margin: 20,
      borderBottomWidth: 1
   },
   view7: {
      marginLeft: 150,
      top: 10
   },
   text5: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 20,
      fontFamily: 'Roboto-Regular'
   },
   text6: {
      fontWeight: 'bold',
      fontSize: 15,
      marginTop: 15,
      paddingBottom: 10,
      fontFamily: 'Roboto-Regular'
   },
   button2: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      marginVertical: 20,
      width: 140,
      backgroundColor: colors.themeColor,
      borderRadius: 5
   },
   button: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      fontFamily: 'Roboto-Regular'
   },


});
export default styles;