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
    lineView: {
        paddingTop: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    textView: {
        paddingTop: responsiveVerticalSize(2),
        paddingBottom: responsiveVerticalSize(2),
        paddingLeft: responsiveHorizontalSize(3),
        paddingRight: responsiveHorizontalSize(3),
        width: '60%'
    },
    fieldText: {
        fontSize: 18,
        fontFamily: 'Roboto-Regular'
    },
    text1: {
        paddingLeft: responsiveHorizontalSize(4),
        paddingTop: responsiveVerticalSize(1),
        fontSize: responsiveFontSize(25),
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: colors.black,
        fontFamily: 'Roboto-Regular'
    },
    mobileView: {
        paddingTop: responsiveVerticalSize(1),
        paddingBottom: responsiveVerticalSize(1),
        paddingLeft: responsiveHorizontalSize(3),
        paddingRight: responsiveHorizontalSize(3),
        flexDirection: 'row'
    },
    nextView: {
        paddingTop: responsiveVerticalSize(1),
        paddingLeft: responsiveHorizontalSize(2),
        paddingBottom: responsiveVerticalSize(2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    condnView: {
        flexDirection: 'row',
        paddingTop: responsiveVerticalSize(5),
        paddingLeft: responsiveHorizontalSize(2),
        paddingBottom: responsiveVerticalSize(5),
    },
    locContainer: {
        margin: 10,
        width: '90%',
        borderColor: colors.dimGrey,
        borderRadius: 10,
        borderWidth: 1,
        height: 60
    },

    locContainer2: {
        margin: 10,
        width: '85%',
        borderColor: colors.dimGrey,
        borderRadius: 10,
        borderWidth: 1,
        height: 60
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
});

export default styles;
