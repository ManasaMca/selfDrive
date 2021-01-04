import { ActionTypes } from '../action-types';

const initialState = {
    isLoading: false,
    getDriverResult: null
};

function getDriverReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.DO_GET_DRIVER_REQUEST:
            return {
                ...state,
                isLoading: true,
                getDriverResult: null,
            };
        case ActionTypes.DO_GET_DRIVER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                getDriverResult: action.result,
            };
            ;
        default:
            return state;
    }
}
export default getDriverReducer;
