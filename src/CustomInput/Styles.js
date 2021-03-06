import {StyleSheet} from 'react-native';
import {flexVariable} from '../stylesheet/flexVariable';
import {
  responsiveHorizontalSize,
  heightPercentageToDP,
  responsiveFontSize,
  responsiveVerticalSize,
} from '../stylesheet/responsiveSize';
import colors from '../stylesheet/colors';

const Styles = StyleSheet.create({
  inputViewContainer: {
    flexDirection: flexVariable.row,
    paddingHorizontal: responsiveHorizontalSize(2),
    alignItems: flexVariable.center,
    marginHorizontal: responsiveHorizontalSize(2),
  },
  fullWidth: {
    flex: 1,
  },
  labelwidth: {
    flex: 2,
  },
  textWidth: {
    flex: 2,
  },
  inputContainer: {
    justifyContent: flexVariable.spaceBetween,
    minHeight: heightPercentageToDP(6.75),
    borderRadius: 4,
    fontSize: responsiveFontSize(16),
    color: colors.black,
    paddingLeft: responsiveHorizontalSize(2.5),
  },
  label: {
    color: colors.dimGrey,
    fontSize: responsiveFontSize(14),
    paddingRight: responsiveHorizontalSize(0.5),
  },
  errorMessage: {
    paddingTop: responsiveVerticalSize(0.5),
    color: colors.danger,
    fontSize: responsiveFontSize(10),
  },
  borderColorRed: {
    borderColor: colors.danger,
  },
  border_0: {
    borderWidth: 0,
    borderRadius: 4,
    paddingLeft: responsiveHorizontalSize(1),
  },
  border_1: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 4,
  },
  margin_2: {
    marginHorizontal: responsiveHorizontalSize(2),
  },
  textAlignRight: {
    textAlign: flexVariable.right,
  },
  textAlignTop: {
    textAlignVertical: flexVariable.top,
  },
  textAlignCenter: {
    textAlignVertical: flexVariable.center,
  },
});

export default Styles;
