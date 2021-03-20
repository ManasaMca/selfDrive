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
        paddingTop: responsiveVerticalSize(3),
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
        width:'80%',
      //  paddingLeft: responsiveHorizontalSize(15),
        justifyContent: "center",
        alignItems:'center'
    },
    text1View: {
        paddingTop: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    otp_container: {
        paddingLeft: 20,
        width: widthPercentageToDP(80),
        height: heightPercentageToDP(20),
    },

    otp_input: {
        width: 50,
        height: 45,
        borderWidth: 2,
        borderRadius: 4,
        color: colors.black,
        fontSize: responsiveFontSize(20),
    },
    otp_active: {
        borderColor: colors.themeColor,
    },
    text1: {
        paddingLeft: responsiveHorizontalSize(5),
        paddingTop: responsiveVerticalSize(2),
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: colors.black,
        fontFamily: 'Geomanist'
    },
    text2: {
        paddingLeft: responsiveHorizontalSize(5),
        paddingTop: responsiveVerticalSize(1),
        fontSize: 15,
        fontStyle: 'normal',
        color: colors.dimGrey,
        fontFamily: 'Geomanist'
    },
    text3: {
        paddingLeft: responsiveHorizontalSize(5),
        fontSize: 15,
        fontStyle: 'normal',
        color: colors.themeColor,
        fontFamily: 'Geomanist'
    },
    text4: {
        paddingLeft: responsiveHorizontalSize(5),

        fontSize: 15,
        fontStyle: 'normal',
        color: colors.themeColor,
        fontFamily: 'Geomanist'
    },
    textView: {
        flexDirection: 'row',
        paddingVertical: responsiveVerticalSize(6),
    },
    nextView: {
        paddingLeft: responsiveHorizontalSize(38),
        alignItems: 'center',
        flex: 1
    },
});

export default styles;
