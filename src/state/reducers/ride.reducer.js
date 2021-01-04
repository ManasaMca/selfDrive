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
  startRideResult: null,
  endRideResult: null,
  scratchCardResult: null,
  rewardsResult: null,
  error: null
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
        isLoading: true,
        getCarsResult: null,
        error: null,
      };
    case ActionTypes.DO_GET_AVAILABLE_RIDES_SUCCESS:{
      let availRides =  isArray(action.result) ? [...action.result] : action.result;
      if(!availRides.data) {
        availRides = {
          ...availRides,
          data : []
        }
      }
      return {
        ...state,
        isLoading: false,
        getAvailableRidesResult: availRides,
        error : availRides.data.length > 0 ? undefined : "Request Ride"
      };
    }
      
   
    case ActionTypes.START_RIDE_REQUEST:
      console.log('start types request')
      return {
        ...state,
        isStartRideLoading: false,
        startRideResult: null
      };
    case ActionTypes.START_RIDE_SUCCESS:
      console.log('start types success')
      return {
        ...state,
        isStartRideLoading: true,
        startRideResult: action.result
      };

    case ActionTypes.END_RIDE_REQUEST:
      return {
        ...state,
        isEndRideLoading: false,
        endRideResult: null,
      };
    case ActionTypes.END_RIDE_SUCCESS:
      return {
        ...state,
        isEndRideLoading: true,
        endRideResult: action.result,
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
    case ActionTypes.GET_REWARDS_REQUEST:
      return {
        ...state,
        isLoading: true,
        scratchCardResult: null
      };
    case ActionTypes.GET_REWARDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rewardsResult: action.result
      };
    case ActionTypes.API_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
export default rideReducer;
