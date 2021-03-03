import { StyleSheet } from 'react-native';
import colors from '../../stylesheet/colors';
import { heightPercentageToDP, responsiveFontSize, widthPercentageToDP } from '../../stylesheet/responsiveSize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 90,
        paddingBottom: 80,
        backgroundColor: colors.themeColor
    },
    background_view: {
        backgroundColor: 'lightgray', height: 230
    },
    view1: {
        // height: '25%',
        width: widthPercentageToDP(95),
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 20
    },
    view2: {
        flexDirection: 'row',
        justifyContent: 'space-around'
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
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginLeft: 10
    },
    car: {
        margin: 5,
        height: 150,
        width: 150,
    },
    headtext2: {
        fontSize: responsiveFontSize(15),
        color: 'black',
        top: 10,
        fontWeight:'bold',
        marginVertical:10,
    },
    vieww: {
        top: 10,
        flexWrap:'wrap'
    },
    txt: {
        fontSize: 15,
        flexWrap:'wrap'
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