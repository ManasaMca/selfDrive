import { StyleSheet } from 'react-native';
import colors from '../../stylesheet/colors';
import { heightPercentageToDP, responsiveFontSize } from '../../stylesheet/responsiveSize';

const styles = StyleSheet.create({
  titleView: {
    flex: 1,
    width: '100%',
    padding: 10,
    position: 'absolute',
    top: 10,
    zIndex: 5,
  },
  text1: {
    fontFamily: 'Geomanist',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    color: colors.black,
  },
  text2: {
    color: colors.themeColor,
    fontSize: 20,
    fontFamily: 'Geomanist',
    fontWeight: 'bold',
  },
  roundedBoxContainer: {
    borderRadius: 10,
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    // shadowColor: Colors.shadowColor,
    //For Shadow in android
    elevation: 5,
    //For shadow in iOS
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
    zIndex: 5,
  },
  textInputStyle: {
    marginLeft: 0,
    marginRight: 0,
    height: 38,
    color: '#5d5d5d',
    fontSize: 16,
  },
  btn: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themeColor
  },
  btnText: {
    color: colors.white,
    fontSize: responsiveFontSize(18),
    fontWeight: 'bold'
  }
});
export default styles;