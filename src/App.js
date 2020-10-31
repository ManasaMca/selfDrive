import React from 'react';
import RootStack from './screens';
import { View, Text} from 'react-native';


export default class App extends React.Component {

    constructor(props) {
      super(props);
    }
    render() {
    
      return (
          <View style={{flex:1}}>
            <RootStack />
          </View>
      );
    }

}

