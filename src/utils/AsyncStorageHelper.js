import AsyncStorage  from '@react-native-community/async-storage'
import messaging from '@react-native-firebase/messaging';

const STORAGE_FCM_TOKEN = "fcmToken";
const MOBILE_NUM = "mobileNum";

export const getFCMToken = async () => {
    let fcmToken = await AsyncStorage.getItem(STORAGE_FCM_TOKEN);
    console.log("FCM TOKEN 1 *******:- ", fcmToken);
    if (!fcmToken) {
        fcmToken = await messaging().getToken();
        if (fcmToken) {
            // user has a device token
            console.log("FCM TOKEN *******:- ", fcmToken);
            await AsyncStorage.setItem(STORAGE_FCM_TOKEN, fcmToken);
        }
    }
    return fcmToken;
}

export const saveMobileNumber = async (mobileNum) => {
    await AsyncStorage.setItem(MOBILE_NUM, mobileNum ? `${mobileNum}` : '')
}

export const getMobileNumber = async () => {
    return await AsyncStorage.getItem(MOBILE_NUM);
}