import {apiconfig} from '../../constants/apiendpoints';
import {useSelector, useDispatch} from 'react-redux';

import axios from 'axios';
import {
  car_fetch_failure,
  car_fetch_status,
  car_fetch_sucess
} from './actioncontants';

export const car_fetch_action = ({ppcode}) => {
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
      pcode: ppcode,
    };
    const config = apiconfig('get_cars.php', body, 'POST');
    axios(config)
      .then((response) => {
        return(dispatch(onsucess(response.data.result)))
 
      })
      .catch((error) => {
        dispatch(onerror(error))
      });
  };

  function onfetching() {
    return {
      type: car_fetch_status,
    };
  }
  function onsucess(data) {
    return {
      type: car_fetch_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: car_fetch_failure,
      errormsg,
    };
  }
};