// import AsyncStorage from '@react-native-community/async-storage';
// import { persistReducer } from 'redux-persist';
import { ActionTypes } from '../action-types';

const initialState = {
  isLoading: false,
  scratchCardResult: null
};

function scratchCardReducer(state = initialState, action) {

  switch (action.type) {
    case ActionTypes.UPDATE_SCRATCH_REQUEST:
      console.log('scratch card request')
      return {
        ...state,
        isLoading: false,
        scratchCardResult: null
      };
    case ActionTypes.UPDATE_SCRATCH_SUCCESS:
      console.log('scratch card success')
      return {
        ...state,
        isLoading: true,
        scratchCardResult: action.result
      };
    default:
      return state;
  }
}
export default scratchCardReducer;
