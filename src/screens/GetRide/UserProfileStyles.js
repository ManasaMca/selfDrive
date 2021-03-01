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
    },
    img: {
        position: "absolute",
        width: 100,
        height: 100,
        top: -100,
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
        borderColor: colors.dimGrey,
        borderRadius: 10,
        borderWidth: 1,
        height: 50
      },
    carView: {
        flexDirection: 'row',
        height: '12%',
        borderColor: colors.lightGrey,
        borderWidth: 1,
        borderRadius: 10,
        width: '95%',
        padding: 5,
        alignSelf: 'center'
    },
    carImgView: {
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    carNameText: {
        fontSize: 16,
        fontFamily: 'Geomanist',
        color: colors.black,
        fontWeight: 'bold'
    },
    carNoText: {
        fontSize: 16,
        fontFamily: 'Geomanist',
        paddingLeft: 5,
        color: colors.black,
        fontWeight: 'bold'
    },
    deleteView: {
        alignItems: 'center',
        justifyContent: 'center',
        width:'8%'

    },
    addCarText: {
        fontSize: 18,
        fontWeight: '300',
        fontFamily: 'Geomanist',
        color: colors.themeColor
    },
    driverName: {
        fontSize: 18,
        paddingLeft: 10,
        fontFamily: 'Geomanist',
        paddingRight: 10,
        paddingBottom: 5,
        color: colors.black,
        fontWeight: '300'
    },
    driverImg: {
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center'
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
        width:'30%',
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