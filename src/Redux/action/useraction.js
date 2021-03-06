import axios from 'axios';
import { users_fetch_sucess, users_update_sucess, users_update_failure, users_update_fetch } from "./actioncontants"
import { apiconfig } from '../../constants/apiendpoints';
import { setUser } from '../../utils/AsyncStorageHelper'
export const users_fetch_action = ({ userDetails }) => {
  return {
    type: users_fetch_sucess,
    userDetails,
  }
};

export const users_update = (body) => {

  return function (dispatch) {
    dispatch(onposting())

    const config = apiconfig('update_profile.php', body, 'POST');
    console.log(config)
    axios(config)
      .then((response) => {
        console.log('response   update profile', response.data);
        if (response.data.statusCode == 1) {
          setUser(JSON.stringify(response.data.data[0]))
          return (dispatch(onsucessign(response.data.data[0])))
        }

        dispatch(onerrorsign(response.data.message))

      })
      .catch((error) => {
        console.log('error', error);
        dispatch(onerrorsign(error))
      });
  };

  function onposting() {
    return {
      type: users_update_fetch,
    }
  }
  function onsucessign(data) {
    return {
      type: users_update_sucess,
      data
    }
  }

  function onerrorsign(errormsg) {
    return {
      type: users_update_failure,
      errormsg
    }

  }
};