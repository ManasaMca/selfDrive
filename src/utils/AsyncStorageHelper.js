import AsyncStorage  from '@react-native-community/async-storage'


const STORAGE_FCM_TOKEN = "fcmToken";
const MOBILE_NUM = "mobileNum";



export const saveMobileNumber = async (mobileNum) => {
    await AsyncStorage.setItem(MOBILE_NUM, mobileNum ? `${mobileNum}` : '')
}

export const getMobileNumber = async () => {
    return await AsyncStorage.getItem(MOBILE_NUM);
}