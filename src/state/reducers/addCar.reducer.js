import { ActionTypes } from '../action-types';

const initialState = {
    isLoading: false,
    addCarResult: null
};

function addCarReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.DO_ADD_CAR_REQUEST:
            return {
                ...state,
                isLoading: true,
                addCarResult: null,
            };
        case ActionTypes.DO_ADD_CAR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addCarResult: action.result,
            };
        default:
            return state;
    }
}
export default addCarReducer;
