import { StyleSheet } from 'react-native';
import colors from '../../stylesheet/colors';
import { heightPercentageToDP, responsiveFontSize } from '../../stylesheet/responsiveSize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 90,
        paddingBottom: 80,
        backgroundColor: colors.themeColor
    },
    background_view: {
        backgroundColor: 'lightgray', height: 800
    },
    view1: {
       // height: '25%',
        width: '85%',
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
        flexDirection: 'row', top: 10
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
        height: 80, width: 150, top: 20
    },
    headtext2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        top: 10
    },
    vieww: {
        top: 20
    },
    txt: {
        fontSize: 15
    },
    button: {
        alignSelf: 'center', paddingTop: 10, color: 'white'
    },
    button2: {
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