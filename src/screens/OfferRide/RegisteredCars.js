import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, StatusBar, FlatList, ActivityIndicator, Alert, } from 'react-native';
import colors from '../../stylesheet/colors';
import { AppConstants } from '../../constants/appconstants';
import styles from './RegisteredCarStyles';
import { ScrollView } from 'react-native-gesture-handler';

class RegisteredCars extends React.PureComponent {

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor={ colors.themeColor }
        />
        
        <SafeAreaView style={ { flex: 1, backgroundColor: colors.lightGrey } }>
        <ScrollView>
          <View style={ [styles.header] }>
            <View style={ [styles.pv1] }>
              <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
                <Image source={ AppConstants.BackWhite } alt="" />
              </TouchableOpacity>
            </View>
            <View style={ { alignItems: 'center', justifyContent: 'center' } }>

              <Text style={ [styles.text1] }>Registered Cars</Text>
            </View>
          </View>
          <View
            style={ [styles.btnView1] }>
            <TouchableOpacity style={ [styles.button1] }
             >
              <Text style={ [styles.btn1_text] }> + Add New Car</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom:80}}>
         
            </View>
         </ScrollView>
        </SafeAreaView> 
      </>
    );
  }
}


export default(RegisteredCars);
