import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './state/store';
import RootStack from './screens';
import { View, Text} from 'react-native';


export default class App extends React.Component {

    constructor(props) {
      super(props);
    }
    render() {
    
      return (
        <Provider store={configureStore().store}>
          <View style={{flex:1}}>
            
            <RootStack />
          </View>
        </Provider>
      );
    }

}

