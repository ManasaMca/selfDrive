import { StyleSheet } from 'react-native';
import {
    responsiveHorizontalSize,
    responsiveVerticalSize,
    responsiveFontSize,
} from '../../stylesheet/responsiveSize';
import colors from '../../stylesheet/colors';

const styles = StyleSheet.create({

    imgStyle: {
        width: '100%',
    },
    textView: {
        paddingTop: 10,
        paddingLeft: 10,
    },

    text: {
        fontFamily: 'Geomanist',
        fontSize: 20,
        fontWeight: '300',
        fontStyle: 'normal',
        color: 'grey'
    },
    flex_row: {
        flexDirection: 'row',
        left: '5%',
        paddingTop: 10,

    },
    btn: {
        backgroundColor: colors.themeColor,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10
    },
    phoneIcon: {
        justifyContent: 'center',
    },
    flex_1: {
        flex: 0,
        paddingHorizontal: responsiveHorizontalSize(2),
        width: '85%',
        borderColor: colors.grey,
    },
    view1: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    btnContainer: {
        margin:10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 15
    },
    text1: {
        paddingLeft: 20,
        fontWeight: 'bold',
        paddingTop: 10
    },
    view2: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textView2: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default styles;