import { StyleSheet } from 'react-native';
import colors from '../../stylesheet/colors';
import { heightPercentageToDP, responsiveFontSize } from '../../stylesheet/responsiveSize';

const styles = StyleSheet.create({

   text1: {
      marginTop: 20
   },
   container: {
      flex: 1,
      height: 150,
      paddingBottom: 80,
      alignItems: "center",
      backgroundColor: colors.themeColor,
   },
   heatdtext: {
      fontSize: 30,
      fontWeight: 'bold',
      color: colors.white,
      textAlign: 'center'
   },
   view1:{
      backgroundColor: 'white', top: -50,  borderTopRightRadius: 50, borderTopLeftRadius: 50
   },
   view2:{
      margin: 20
   },
   text3:{
      fontWeight: 'bold', fontSize: 25, color: 'black'
   },
   view4:{
      justifyContent:'center' ,width:'40%'
   },
   image1:{
      height: 50, width: 100,  
   },
   view5:{
      justifyContent:'center' ,width:'50%',flexDirection:'row'
   },
   view6:{
      margin: 20, borderBottomWidth: 1 
   },
   view7:{
      marginLeft: 150, top: 10
   },
   text4:{
      fontSize: 20, fontWeight: 'bold'
   },
   text5:{
      fontWeight: 'bold', color: 'black', fontSize: 20 
   },
   text6:{
      fontWeight: 'bold', fontSize: 15, marginTop: 15, paddingBottom: 10 
   },


});
export default styles;