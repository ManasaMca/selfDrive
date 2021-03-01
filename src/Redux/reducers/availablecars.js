import {
    avail_car_fetch_failure,
    avail_car_fetch_status,
    avail_car_fetch_sucess
} from '../action/actioncontants';
const carinitialState = {
    car: [],
    isfetchingbrand: true,
    branderror: false,
    branderrormsg: '',
    brandsucess: false,
};

const availCarReducer = (state = carinitialState, action) => {
    switch (action.type) {
        case avail_car_fetch_status:
            return {
                ...state,
                isfetchingbrand: true,
            };
        case avail_car_fetch_sucess:
            return {
                ...state,
                car: action.data,
                isfetchingbrand: false,
                brandsucess: true,
            };

        case avail_car_fetch_failure:
            return {
                ...state,
                isfetchingbrand: false,
                branderror: true,
                branderrormsg: action.errormsg,
            };


        default:
            return state;
    }
};
export default availCarReducer;