import AsyncStorage from '@react-native-community/async-storage'


const STORAGE_FCM_TOKEN = "fcmToken";
const MOBILE_NUM = "mobileNum";



export const saveMobileNumber = async (mobileNum) => {
    await AsyncStorage.setItem(MOBILE_NUM, mobileNum ? `${mobileNum}` : '')
}

export const getMobileNumber = async () => {
    return await AsyncStorage.getItem(MOBILE_NUM);
}

export const getUser = async () => {
    let user = await AsyncStorage.getItem('userToken');
    console.log(JSON.parse(user))
    return JSON.parse(user)
}