import { StyleSheet } from 'react-native';
import colors from '../../stylesheet/colors';
import {
  responsiveHorizontalSize,
  responsiveVerticalSize,
  responsiveFontSize,
} from '../../stylesheet/responsiveSize';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: '9%',
    backgroundColor: colors.themeColor,
    alignItems: 'center',
  },
  backbtn: {
    alignItems: 'center',
    width: '12%',
    justifyContent: 'center',
  },
  logoView: {
    alignItems: 'center',
    width: '75%',
    justifyContent: 'center',
  },
  view_1: {
    flexDirection: 'row',
    //  justifyContent: 'space-around',
    //   top: 50 
  },

  lineView: {
    borderBottomColor: colors.suvaGrey,
    borderBottomWidth: 0.5,
    padding: 5
  },
  text2: {
    padding: 10,
    fontFamily: 'Geomanist',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(20),
    color: colors.black,
  },

  container: {
    marginHorizontal: 10,
    width: '55%',
    borderColor: colors.dimGrey,
    borderRadius: 10,
    borderWidth: 1,
    height: 60
  },
  nextView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
    top:20,
    bottom:20
  },
  btn:{
    width:'80%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.themeColor
  },
  btnText:{
    color:colors.white,
    fontSize:responsiveFontSize(18),
    fontWeight:'bold'
  }
});
export default styles;