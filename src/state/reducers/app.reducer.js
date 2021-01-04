// import AsyncStorage from '@react-native-community/async-storage';
// import { persistReducer } from 'redux-persist';
import {ActionTypes} from '../action-types';

const initialState = {
  isLoading: false,
  userLoginResult: null,
  chnageTime: new Date().getTime()
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.DO_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        userLoginResult: null,
      };
    case ActionTypes.DO_LOGIN_SUCCESS:{
      return {
        ...state,
        isLoading: false,
        userLoginResult: action.result,
        chnageTime: new Date().getTime()
      };
    }
     
      case ActionTypes.DO_GET_LOGIN_REQUEST:{
        return {
          ...state,
          isLoading: true,
          userLoginResult: null,
        };
      }

      
      case ActionTypes.DO_GET_LOGIN_SUCCESS:{
          return {
            ...state,
            isLoading: false,
            userLoginResult: action.result,
            chnageTime: new Date().getTime()

          };

        }
       
    case ActionTypes.DO_LOGIN_ERROR:{
      return {
        ...state,
        isLoading: false,
        userLoginResult: null,
      };
    }
     
    case ActionTypes.DO_USER_LOGOUT:{
      return initialState;
    }
      
    default:
      return state;
  }
}
export default appReducer;
