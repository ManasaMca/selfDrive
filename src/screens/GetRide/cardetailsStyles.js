import { StyleSheet } from 'react-native';
import colors from '../../stylesheet/colors';
import { heightPercentageToDP, responsiveFontSize } from '../../stylesheet/responsiveSize';

const styles = StyleSheet.create({

 text1:{
    marginTop: 20
 },
 container: {
    flex: 1,
    height: 150,
    paddingBottom: 80,
    alignItems: "center",
    backgroundColor: colors.themeColor,
},


});
export default styles;