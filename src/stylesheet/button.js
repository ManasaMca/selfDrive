import {StyleSheet} from 'react-native';
import {flexVariable} from './flexVariable';
import {
  responsiveHorizontalSize,
  responsiveVerticalSize,
  responsiveFontSize,
} from './responsiveSize';
import colors from './colors';

const Styles = StyleSheet.create({
  btnContainer: {
    flexDirection: flexVariable.column,
    alignItems: flexVariable.center,
    paddingHorizontal: responsiveHorizontalSize(3),
    paddingVertical: responsiveVerticalSize(1),
    borderRadius: responsiveHorizontalSize(1),
    borderWidth: responsiveFontSize(1),
    backgroundColor: colors.grey,
    borderColor: colors.grey,
  },
  btnPosition: {
    marginHorizontal: responsiveHorizontalSize(3),
    marginVertical: responsiveVerticalSize(2),
  },
  btn_text: {
    fontSize: responsiveFontSize(20),
    color: colors.black,
    letterSpacing: responsiveFontSize(0.5),
  },
  btn_small_Container: {
    flexDirection: flexVariable.row,
    alignItems: flexVariable.center,
    paddingHorizontal: responsiveHorizontalSize(1.25),
    paddingVertical: responsiveVerticalSize(0.65),
    borderRadius: responsiveHorizontalSize(1),
    borderWidth: responsiveFontSize(1),
    backgroundColor: colors.grey,
    borderColor: colors.grey,
    marginTop: responsiveVerticalSize(0.5),
  },
  btn_small_text: {
    fontSize: responsiveFontSize(10),
    color: colors.black,
    letterSpacing: responsiveFontSize(0.5),
  },
  btn_transparent: {
    flexDirection: flexVariable.column,
    alignItems: flexVariable.center,
    paddingHorizontal: responsiveHorizontalSize(1.5),
    paddingVertical: responsiveVerticalSize(1.5),
    borderRadius: responsiveHorizontalSize(1),
    borderWidth: responsiveFontSize(1),
    backgroundColor: colors.transparent,
    borderColor: colors.dimGrey,
  },
  btn_transparent_text: {
    fontSize: responsiveFontSize(16),
    color: colors.white,
    letterSpacing: responsiveFontSize(0.5),
  },
  disabledBtn: {
    backgroundColor: colors.dimGrey,
    borderColor: colors.dimGrey,
  },
  inprogress__btn: {
    backgroundColor: colors.salmonred,
    borderColor: colors.salmonred,
  },
});

export default Styles;
