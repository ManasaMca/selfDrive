import { ActionTypes } from '../action-types';

const initialState = {
  isLoading: false,
  rateRidesResult: null
};

function listRideReducer(state = initialState, action) {
  switch (action.type) {

    case ActionTypes.RATING_RIDE_REQUEST:
      console.log('action.type2')
      return {
        ...state,
        isLoading: true,
        rateRidesResult: null,
      };
    case ActionTypes.RATING_RIDE_REQUEST:
      console.log('action.type1')
      return {
        ...state,
        isLoading: false,
        rateRidesResult: action.result,

      };
    default:
      return state;
  }
}
export default listRideReducer;
