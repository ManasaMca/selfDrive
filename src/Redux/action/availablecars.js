import { apiconfig } from '../../constants/apiendpoints';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import {
    avail_car_fetch_failure,
    avail_car_fetch_status,
    avail_car_fetch_sucess
} from './actioncontants';

export const avail_car_fetch_action = ({ date, seating, lati, longi }, pcode) => {
    return function (dispatch) {
        dispatch(onfetching());
        const body = {
            pcode: pcode,
            seating: seating,
            bookingdate: date,
            lat: lati,
            long: longi
        };
        console.log('body sent in avial cars',body)
        const config = apiconfig('available_cars.php', body, 'POST');
        axios(config)
            .then((response) => {

                console.log(response.data)
                return (dispatch(onsucess(response.data.result)))

            })
            .catch((error) => {
                dispatch(onerror(error))
            });
    };

    function onfetching() {
        return {
            type: avail_car_fetch_status,
        };
    }
    function onsucess(data) {
        return {
            type: avail_car_fetch_sucess,
            data,
        };
    }

    function onerror(errormsg) {
        return {
            type: avail_car_fetch_failure,
            errormsg,
        };
    }
};