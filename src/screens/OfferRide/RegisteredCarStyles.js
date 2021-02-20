import { StyleSheet } from 'react-native';
import colors from '../../stylesheet/colors';

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      height: 50,
      backgroundColor: colors.themeColor,
      alignItems: 'center',
    },
    pv1: {
      alignItems: 'center',
      width: '15%',
      justifyContent: 'center',
    },
    text1: {
      fontFamily: 'Geomanist',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 20,
      color: colors.white,
    },
    button1: {
      padding: 3,
      width: '70%',
      //  height: '32%',
      backgroundColor: colors.themeColor,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn1_text: {
      color: colors.white,
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Geomanist',
    },
    pv2: {
      marginTop: 10,
      backgroundColor: colors.white,
      borderRadius: 10,
      // height:'30%',
      width: '90%',
      alignSelf: 'center',
    },
    pv3: {
      flexDirection: 'column',
      alignSelf: 'flex-end',
      justifyContent: 'center',
      width: '65%',
    },
    img: {
      width: '45%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text3: {
      fontFamily: 'Geomanist',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 18,
      color: colors.black,
    },
    text4: {
      fontFamily: 'Geomanist',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 16,
      color: colors.black,
    },
    text5: {
      fontFamily: 'Geomanist',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 15,
      color: colors.black,
    },
    button2: {
      width: '65%',
      backgroundColor: colors.green,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn2_txt: {
      //  padding:2,
      color: colors.white,
      fontSize: 15,
      fontWeight: 'bold',
      fontFamily: 'Geomanist',
    },
    pv4: {
      flexDirection: 'row',
      borderTopEndRadius: 35,
      borderTopStartRadius: 35,
      backgroundColor: 'white',
      shadowColor: 'grey',
      width: '100%',
      height: '10%',
      position: 'absolute',
      bottom: 0,
    },
    btnView:{
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    btnView1:{
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
    },
  });
  export default styles;