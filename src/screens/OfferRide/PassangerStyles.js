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
  text1: {
    padding: 5,
    fontFamily: 'Geomanist',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(20),
    color: colors.black,
  },
  seats1:{
    height: 50,
     width: 120,
      backgroundColor: 'grey', 
      borderRadius: 10 
  },
  view_1:{
    flexDirection: 'row',
     justifyContent: 'space-around',
      top: 50 
  },

  countContainer: {
    flexDirection: 'row',
    paddingLeft: responsiveHorizontalSize(4),
    paddingRight: responsiveHorizontalSize(2),
  },
  countView: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceView: {
    flexDirection: 'row',
    paddingLeft: responsiveHorizontalSize(2),
    paddingTop: responsiveVerticalSize(1),
    paddingBottom: responsiveVerticalSize(1)
  },
  priceText: {
    fontFamily: 'Geomanist',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(20),
    color: colors.black,
  },
  priceInput: {
    width: '100%',
    fontSize: responsiveFontSize(20),
    fontWeight: 'bold',
    paddingTop: 0,

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
  text3: {
    paddingLeft: responsiveHorizontalSize(2),
    paddingTop: responsiveVerticalSize(2),
    fontFamily: 'Geomanist',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(20),
    color: colors.black,
  },
  text4: {
    color: 'white',
    marginTop: 15,
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },
  nextView: {
    paddingLeft: responsiveHorizontalSize(0),
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'flex-end',
  }
});
export default styles;