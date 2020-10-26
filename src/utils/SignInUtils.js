import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

async function setupGoogleSignin() {
    try {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        await GoogleSignin.configure({
            //iosClientId: Config.CLIENT_ID
            // iosClientId: settings.iOSClientId,
            //webClientId: settings.webClientId,
            // offlineAccess: false
        });
    }
    catch (err) {
        console.log("Google signin error", err.code, err.message);
    }
}

export const setUpGoogleLogin = async (callback) => {
    
    try {
        console.log("userInfo :- ");
        await GoogleSignin.configure({
            //iosClientId: Config.CLIENT_ID
            // iosClientId: settings.iOSClientId,
            //webClientId: settings.webClientId,
            // offlineAccess: false
        });
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("userInfo :- ", userInfo);
        //this.setState({ userInfo });
        await GoogleSignin.signOut()
        callback({ 
            status: true,
            userInfo: userInfo
        })
      } catch (error) {
          console.log(error);
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          callback({
            status: false,
            message: "Signin cancelled by user"
          })
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
          callback({
            status: false,
            message: "Signin in progress"
          })
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
          callback({
            status: false,
            message: "Play service not available"
          })
        } else {
          // some other error happened
          callback({
            status: false,
            message: "Something went wrong"
          })
        }
      }
}