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
        paddingTop: 15,
        alignItems: 'center'
    },
    pv1: {
        alignItems: 'center',
        paddingLeft: 20
    },
    logoView: {
        paddingLeft: 130,
        justifyContent: "center"
    },
    lineView: {
        paddingTop: 15,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    textView: {
        paddingTop: responsiveVerticalSize(2),
        paddingBottom: responsiveVerticalSize(2),
        paddingLeft:responsiveHorizontalSize(3),
        paddingRight:responsiveHorizontalSize(3),
        width: '60%'
    },
    fieldText: {
        fontSize: 18,
        fontFamily: 'Geomanist',
    },
    text1: {
        paddingLeft: responsiveHorizontalSize(4),
        paddingTop: responsiveVerticalSize(1),
        fontSize: responsiveFontSize(25),
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: colors.black,
        fontFamily: 'Geomanist'
    },
    mobileView: {
        paddingTop: responsiveVerticalSize(1),
        paddingBottom: responsiveVerticalSize(1),
        paddingLeft:responsiveHorizontalSize(3),
        paddingRight:responsiveHorizontalSize(3),
      flexDirection:'row'
    },
    nextView: {
        paddingTop: responsiveVerticalSize(1),
        paddingLeft: responsiveHorizontalSize(2),
        paddingBottom: responsiveVerticalSize(2),
        alignItems: 'center',
        justifyContent:'center'
    },
    condnView: { 
        flexDirection: 'row', 
        paddingTop: responsiveVerticalSize(5),
        paddingLeft: responsiveHorizontalSize(2),
        paddingBottom: responsiveVerticalSize(5),
},
locContainer:{
margin:10,
width:'90%',
borderColor:colors.dimGrey,
borderRadius:10,
borderWidth:1,
height:60
},

locContainer2:{
    margin:10,
    width:'85%',
    borderColor:colors.dimGrey,
    borderRadius:10,
    borderWidth:1,
    height:60
    }
});

export default styles;
