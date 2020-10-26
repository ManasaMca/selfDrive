import { ActionTypes } from '../action-types';

const initialState = {
    isLoading: false,
    driverProfileResult: null
};

function driverProfileReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.DO_DRIVER_PROFILE_REQUEST:
            return {
                ...state,
                isLoading: true,
                driverProfileResult: null,
            };
        case ActionTypes.DO_DRIVER_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                driverProfileResult: action.result,
            };
        default:
            return state;
    }
}
export default driverProfileReducer;
