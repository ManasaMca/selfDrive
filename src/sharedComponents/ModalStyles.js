import { StyleSheet } from 'react-native';
import colors from '../stylesheet/colors';
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10
    },
    modalView: {

        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        //marginLeft: 140,
        //marginRight: 140,
        borderColor: colors.grey,
        borderWidth: 2,
        width: '100%'
    },
    openButton: {
        backgroundColor: colors.themeColor,
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    Btn: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingTop: 5,
        width: '100%',
        //  alignSelf: 'center',
        backgroundColor: colors.themeColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    btn2Text: {
        color: colors.white,
        fontSize: 14,
        fontWeight: '200'
    }
});
export default styles;