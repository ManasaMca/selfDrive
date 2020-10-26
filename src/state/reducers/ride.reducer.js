// import AsyncStorage from '@react-native-community/async-storage';
// import { persistReducer } from 'redux-persist';
import { ActionTypes } from '../action-types';
import { isArray } from 'util';

const initialState = {
  isLoading: false,
  isStartRideLoading: false,
  isEndRideLoading: false,
  bookRideResult: null,
  offerRideResult: null,
  getCarsResult: null,
  getAvailableRidesResult: null,
};

function rideReducer(state = initialState, action) {

  switch (action.type) {
    case ActionTypes.DO_BOOK_RIDE_REQUEST:
      return {
        ...state,
        isLoading: true,
        bookRideResult: null,
      };
    case ActionTypes.DO_BOOK_RIDE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        bookRideResult: action.result,
      };
    case ActionTypes.DO_OFFER_RIDE_REQUEST:
      return {
        ...state,
        isLoading: true,
        offerRideResult: null,
      };
    case ActionTypes.DO_OFFER_RIDE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        offerRideResult: action.result,
      };
    case ActionTypes.DO_GET_CARS_REQUEST:
      return {
        ...state,
        isLoading: false,
        getCarsResult: null,
      };
    case ActionTypes.DO_GET_CARS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        getCarsResult: action.result,
      };
    case ActionTypes.DO_GET_AVAILABLE_RIDES_REQUEST:
      return {
        ...state,
        isLoading: false,
        getCarsResult: null,
      };
    case ActionTypes.DO_GET_AVAILABLE_RIDES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        getAvailableRidesResult: isArray(action.result) ? [...action.result] : action.result,
      };
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
export default rideReducer;
