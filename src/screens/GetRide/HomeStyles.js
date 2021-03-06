import { StyleSheet } from 'react-native';
import {
    responsiveHorizontalSize,
    responsiveVerticalSize,
    responsiveFontSize,
    widthPercentageToDP,
    heightPercentageToDP,
} from '../../stylesheet/responsiveSize';
import colors from '../../stylesheet/colors';

const styles = StyleSheet.create({
    flex_row: {
        flexDirection: 'row',
        width:'100%',
        justifyContent:'center',
        alignItems: 'center'
    },
    pv1: {
        justifyContent:'center',
        alignItems: 'center',
      //  width:'10%',
       // paddingLeft: responsiveHorizontalSize(4)
    },
    logoView: {
        width:'100%',
      //  paddingLeft: responsiveHorizontalSize(15),
        justifyContent: "center",
        alignItems:'center'
    },
    lineView: {
        paddingTop: responsiveVerticalSize(1),
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    lineView2: {
        width: '90%',
        alignSelf: 'center',
        paddingTop: responsiveVerticalSize(3),
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },

    titleView: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1: {
        fontSize: responsiveFontSize(25),
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: colors.black,
        fontFamily: "Roboto-Bold"
    },
    text2View: {
        paddingTop: responsiveVerticalSize(2),
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text2: {

        fontSize: responsiveFontSize(16),
        fontStyle: 'normal',
        color: colors.dimGrey,
        fontFamily: 'Roboto-Regular'
    },
    btn: {

        alignItems: 'center',
        justifyContent: 'center',

    },
    btnText: {
        color: colors.themeColor,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(22),
        fontFamily: 'Roboto-Regular'
    },
    logoutView: {
        width: '15%',
       alignItems: 'flex-start',
       justifyContent: 'center',
       marginRight: 10,
       padding: 5,
       paddingHorizontal: 10,
    },
    logoutBtnText: {
        color: colors.themeColor,
        fontSize: responsiveFontSize(22),
        fontWeight: 'bold',
        fontFamily: 'Roboto-Regular'
    }
});

export default styles;
