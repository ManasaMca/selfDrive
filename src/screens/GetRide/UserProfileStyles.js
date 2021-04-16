import { StyleSheet } from 'react-native';

import colors from '../../stylesheet/colors';
import { responsiveHorizontalSize, responsiveVerticalSize, } from '../../stylesheet/responsiveSize';

const styles = StyleSheet.create({

    titleText: {
        color: colors.white,
        fontSize:26,
        fontWeight: 'bold',
       // paddingLeft:responsiveHorizontalSize(2)
    },
    TitleView: {
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.themeColor
    },
    pv1: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: 50,
        paddingTop: 55,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: responsiveVerticalSize(10),
        paddingBottom: 100
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top:-100,
    },
    img: {
        
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    fieldText: {
        fontSize: 20,
        fontFamily: 'Geomanist'
    },
    textView: {
        padding: 10,
        width: '50%'
    },
    emailView: {
        padding: 10,
        flexDirection: 'row'
    },
    editBtn: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    mobileView: {
        padding: 10,
        flexDirection: 'row'
    },
    carText: {
        fontSize: 20,
        padding: 10,
        fontFamily: 'Geomanist',
        color: colors.black,
        fontWeight: 'bold'
    },
    container: {
        marginHorizontal: 10,
        width: '70%',
        borderColor: colors.themeColor,
        borderRadius: 10,
        borderWidth: 1,
        height: 50,
        alignItems:'center',
        justifyContent:'center'
      },
    
    bt1: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingLeft: '38%'
    },
    btn2: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingLeft: 10
    },
    textinput: {
        borderBottomColor: colors.dimGrey,
        borderBottomWidth: 1,
        fontSize: 20,
        opacity: 1,
    },
    inputContainer: {
        padding: 10,
        flex: 1
    },
    btnStyle: {
        backgroundColor: colors.themeColor,
        height: 50,
        width:'90%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      marginHorizontal:10,
      marginVertical:10
    },
    btnText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20
    },
    profileImg: {
        position: "absolute",
        top: -100,
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});
export default styles;