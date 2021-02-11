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
  view_1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: 50
  },

  priceView: {
    flexDirection: 'row',
    paddingLeft: responsiveHorizontalSize(2),
    paddingTop: responsiveVerticalSize(1),
    paddingBottom: responsiveVerticalSize(1),
  },
  priceText: {
    fontFamily: 'Geomanist',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(20),
    color: colors.black,
    top:5
  },
  priceInput: {
    width: '100%',
    fontSize: responsiveFontSize(20),
    fontWeight: 'bold',
    },
  container1: {
    marginHorizontal: 10,
    width: '58%',
    borderColor: colors.dimGrey,
    borderRadius: 10,
    borderWidth: 1,
    height: 45,
    justifyContent:'center'
  },
  lineView: {
    borderBottomColor: colors.suvaGrey,
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10

  },
  text2: {
    padding: 10,
    fontFamily: 'Geomanist',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(22),
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
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    marginHorizontal: 10,
    width: '55%',
    borderColor: colors.dimGrey,
    borderRadius: 10,
    borderWidth: 1,
    height: 50
  },
  addCarText: {
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'Geomanist',
    color: colors.themeColor
  },
  submit: {
    height: 50,
    width: 150,
    backgroundColor: colors.themeColor,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5
  }
});
export default styles;