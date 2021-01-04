import { Alert } from 'react-native'

export const APP_NAME = "Carpooling"

export const AppOkAlert = (msg, onOkCallback, btnText = 'OK', title = APP_NAME) => {
    setTimeout(() => {
        Alert.alert(
            title,
            `${msg}`,
            [
                {
                    text: btnText,
                    onPress: () => onOkCallback()
                },
            ],
            { cancelable: false },
        );
    }, 300)
}



export const AppAlertLoginError = (msg, title = APP_NAME) => {
    // console.log('Cancel Pressed', msg),
    // console.log('Cancel Pressed', msg.message.message),
    setTimeout(() => {
        Alert.alert(
            title,
            msg,
            [
                // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                // {
                //     text: 'Cancel',
                //     onPress: () => console.log('Cancel Pressed'),
                //     style: 'cancel',
                // },
                {
                    text: 'OK'
                },
            ],
            { cancelable: false },
        );
    }, 300)
    
}

export const AppOkCancelAlert = (msg, onOkCallback, onCancelCallback,title = APP_NAME) => {
    setTimeout(() => {
        Alert.alert(
            title,
            msg,
            [
                {
                    text: 'Cancel',
                    onPress: () => onCancelCallback(),
                    //style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => onOkCallback()
                },
            ],
            { cancelable: false },
        ); 
    }, 300)
    
}

export const AppYesNoAlert = (msg, onOkCallback, onCancelCallback,title = APP_NAME) => {
    setTimeout(() => {
        Alert.alert(
            title,
            msg,
            [
                {
                    text: 'NO',
                    onPress: () => onCancelCallback(),
                    //style: 'cancel',
                },
                {
                    text: 'YES', onPress: () => onOkCallback()
                },
            ],
            { cancelable: false },
        ); 
    }, 300)
    
}

export const AppBackAlert = (msg, navigation, title = APP_NAME) => {
    setTimeout(() => {
        Alert.alert(
            title,
            msg,
            [
                // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => { navigation.goBack() }
                },
            ],
            { cancelable: false },
        );
    }, 300)
    
}


export const getCityName = (details) => {
  const locality =
    details &&
    details.address_components.filter((obj) => obj.types.includes('locality'));
  if (locality && locality.length > 0) {
    return locality[0].long_name;
  } else {
    return '';
  }
};
