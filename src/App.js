import React from 'react';
import RootStack from './screens/index';
import { View, Text} from 'react-native';
import {Provider} from 'react-redux';
import ConfigureStore from './Redux/store/ConfigStore';

const store = ConfigureStore();


export default class App extends React.Component {

    constructor(props) {
      super(props);
    }
    render() {
    
      return (
          <View style={{flex:1}}>
              <Provider store={store}>
            <RootStack />
            </Provider>
          </View>
      );
    }

}

