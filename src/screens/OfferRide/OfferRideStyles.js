import { StyleSheet } from 'react-native';
import colors from '../../stylesheet/colors';
import { heightPercentageToDP, responsiveFontSize } from '../../stylesheet/responsiveSize';

const styles = StyleSheet.create({
  titleText: {
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
  pv1: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '48%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    color: colors.themeColor,
    fontSize: 20,
    fontFamily: 'Geomanist',
    fontWeight: 'bold',
  },
  pv2: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: '48%',
    height: 60,
    alignSelf: 'flex-end',
  },
  bottomView: {
    flexDirection: 'row',
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    width: '100%',
    height: '10%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    shadowColor: 'grey',
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
  nextView: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  carview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 50
  },
  carview2: {
    width: 100,
    height: 70,
    backgroundColor: 'white',
    bottom: 100,
    borderRadius: 10
  },
  t1: {
    margin: 5,
    fontWeight: 'bold'
  },
  mm: {
    width: '100%',
    height: heightPercentageToDP('100%') - 60
  },
  image1: {
    height: 30, width: 60
  },
  image2: {
    height: 20, width: 20, top: 10
  },

  v2: {
    flexDirection: 'row'
  },
  v3: {
    flex: 1, flexDirection: 'row',
  },
});
export default styles;