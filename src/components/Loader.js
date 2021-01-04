
import React from 'react';
import {View, StyleSheet, ActivityIndicator, Modal,Text } from "react-native";
import colors from '../stylesheet/colors';

const Loader = props => {
  const {
    loading,
    info,
    ...attributes
  } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {console.log('close modal')}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size={props.size || "large"}
            color={props.color || colors.themeColor}
            animating={loading} />
          {info && <Text style={{
            fontSize: 14,
            color:colors.themeColor,
            
          }}>{info}</Text>}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader;