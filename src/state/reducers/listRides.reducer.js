import { ActionTypes } from '../action-types';
import { isArray } from 'util';

const initialState = {
    isLoading: false,
    listRidesResult: []
};

function listRideReducer(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.LIST_RIDE_REQUEST:
            console.log('action.type2')
            return {
                ...state,
                isLoading: true,
                listRidesResult: [],
            };
        case ActionTypes.LIST_RIDE_SUCCESS:
            console.log('action.type1')
            return {
                ...state,
                isLoading: false,
                listRidesResult: isArray(action.result) ? [...action.result] : action.result,

            };
        default:
            return state;
    }
}
export default listRideReducer;
