import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../stylesheet/colors';
import { heightPercentageToDP, responsiveFontSize, widthPercentageToDP } from '../../stylesheet/responsiveSize';

const styles = StyleSheet.create({
    container: {

        height: heightPercentageToDP(10),

        backgroundColor: colors.themeColor
    },
    view1: {
        // height: '25%',
        width: widthPercentageToDP(95),
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 20,
       // flexDirection: 'row',
        justifyContent: 'center',
        marginVertical:5
    },
    view3: {
        flexDirection: 'row',
        top: 10
    },
    image1: {
        height: 20,
        width: 20,
        top: 2
    },
    img1:{
        height: 40,
        width: 40,
        top: 2,
        borderRadius:50
       // resizeMode:'contain'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginLeft: 10
    },
    car: {
        resizeMode: 'contain',
        borderRadius:10,
        height: 120,
        width: 150,
    },
    car1: {
        resizeMode: 'contain',
        borderRadius:10,
        height: 80,
        width: 100,
    },
    headtext2: {
        fontSize: responsiveFontSize(15),
        color: 'black',
        top: 10,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    vieww: {
        top: 10,
        bottom:10
    },
    txt: {
        fontSize: responsiveFontSize(15),
    },
    button: {
        fontSize: 15,
        fontWeight: '900',
        color: 'white'
    },
    button2: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginVertical: 20,
        width: 140,
        backgroundColor: colors.themeColor,
        borderRadius: 5
    },
    heading2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.white,
        marginLeft: 20
    }

});
export default styles;