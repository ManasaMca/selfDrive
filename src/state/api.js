import {
  BASE_URL,
  AUTO_COMPLETE_URL,
  bookRideEndPoint,
  offerRideEndPoint,
  getCarsEndPoint,
  getAvailableRidesEndPoint,
  profileOtpEndPoint,
  profileEndPoint,
  driverProfileEndPoint,
  addCarEndPoint,
  driverProfileEndPoint2,
  getDriverEndPoint,
  listRidesEndPoint,
  ratingsEndPoint,
  startRideEndPoint,
  endRideEndPoint,
  confirmRideEndPoint,
  updateScratchEndPoint,
  requestRideEndPoint,
  rewardsEndPoint,
  registerDevice,
  getProfileEndPoint, cancelBookride, custRating, updateEndPoint, cancelOfferride, updateDriver, updateCar, socailLogin,
  getNotificationsEnd,
  appVersionInfoUrl
} from '../constants/apiendpoints';
import { Alert } from 'react-native'

const ERROR_MSG = "Sorry we are unable to process your request at this moment....!, Please Try again after some time.";

export const doBookRide = async (data) => {
  try {
    console.log(`${BASE_URL}${bookRideEndPoint}`);
    console.log(data);
    const url = new URL(`${BASE_URL}${bookRideEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
    const result = await response.json();
    console.log('doBookRide Result', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }

};

export const doSocialLogin = async (data) => {
  try {
    console.log(`${BASE_URL}${socailLogin}`);
    console.log(data);
    const url = new URL(`${BASE_URL}${socailLogin}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
    const result = await response.json();
    console.log('doSocialLogin Result', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }

};

export const getFacbookProfile = async (accessToken) => {
  try {
    const url = new URL(`https://graph.facebook.com/v2.5/me?fields=email,name&access_token=${accessToken}`);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      timeout: 30 * 1000,
    });
    const result = await response.json();
    console.log('doSocialLogin Result', result);
    return { statusCode: 1, data: result }
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }

};

export const doOfferRide = async (data) => {
  try {
    console.log(`${BASE_URL}${offerRideEndPoint}`);
    console.log(data);
    const url = new URL(`${BASE_URL}${offerRideEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
    const result = await response.json();
    console.log('doOfferRide Result', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const doGetCars = async (data) => {
  try {
    console.log(`${BASE_URL}${getCarsEndPoint}`);
    console.log(data);
    const url = new URL(`${BASE_URL}${getCarsEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
    const result = await response.json();
    console.log('doGetCars Result', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const getNotifications = async (data) => {
  try {
    console.log(`${BASE_URL}${getNotificationsEnd}`);
    console.log(data);
    const url = new URL(`${BASE_URL}${getNotificationsEnd}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
    const result = await response.json();
    console.log('getNotificationsEnd Result', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const doGetAvailableRides = async (data) => {
  try {
    console.log(`${BASE_URL}${getAvailableRidesEndPoint}`);
    console.log(data);
    const url = new URL(`${BASE_URL}${getAvailableRidesEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
    const result = await response.json();
    console.log('doGetAvailableRides Result', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const doProfileOtp = async (data) => {
  try {
    console.log(`${BASE_URL}${profileOtpEndPoint}`);
    console.log(data);
    const url = new URL(`${BASE_URL}${profileOtpEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
    const result = await response.json();
    console.log('profileOtp Result', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const doProfile = async (data) => {
  try {
    console.log("data :- ", data);
    console.log(`${BASE_URL}${profileEndPoint}`);

    const url = new URL(`${BASE_URL}${profileEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
    const result = await response.json();
    console.log('profile Result', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const updateProfile = async (data) => {
  try {
    console.log("data :- ", data);
    console.log(`${BASE_URL}${updateEndPoint}`);

    const url = new URL(`${BASE_URL}${updateEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
    const result = await response.json();
    console.log('profile Result', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

//  driver profile

export const driverProfile = async (data) => {
  try {
    console.log("data :- ", data);
    console.log(`${BASE_URL}${driverProfileEndPoint}`);
    const url = new URL(`${BASE_URL}${driverProfileEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
    const result = await response.json();
    console.log('driver ', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const updateDriverProfile = async (data) => {
  try {
    console.log("data :- ", data);
    console.log(`${BASE_URL}${updateDriver}`);
    const url = new URL(`${BASE_URL}${updateDriver}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
    const result = await response.json();
    console.log('driver ', result);

    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const updateCarProfile = async (data) => {
  try {
    console.log("data :- ", data);
    console.log(`${BASE_URL}${updateCar}`);
    const url = new URL(`${BASE_URL}${updateCar}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
    const result = await response.json();
    console.log('driver ', result);

    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const doAddCardriver = async (data) => {
  try {

    console.log(`${BASE_URL}${driverProfileEndPoint2}`);
    console.log(data);
    const url = new URL(`${BASE_URL}${driverProfileEndPoint2}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
    try {
      const result = await response.json();
      console.log('Add Car ', result);
      return result;
    } catch (err) {
      console.log(err);
      const text = await response.text();
      console.log('Add Car text ', text);
    }
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const doAddCar = async (data,data1) => {
  // try {
    console.log(`${BASE_URL}${addCarEndPoint}`);
    console.log(`${BASE_URL}${driverProfileEndPoint2}`); 
    const url = new URL(`${BASE_URL}${addCarEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
      const result = await response.json();
      console.log('Add Car ', result);
      return result;
 
};


//Get drivers
export const doGetDrivers = async (data) => {
  try {
    console.log(`${BASE_URL}${getDriverEndPoint}`);
    console.log(data);
    const url = new URL(`${BASE_URL}${getDriverEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });

    const result = await response.json();
    console.log('get driver ', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

//Get rides
export const listRides = async (data) => {
  try {
    console.log(`${BASE_URL}${listRidesEndPoint}`);
    console.log(data);
    const url = new URL(`${BASE_URL}${listRidesEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });

    const result = await response.json();
    console.log('get rides ', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const confirmRideOTP = async (data) => {
  try {
    const url = new URL(`${BASE_URL}${confirmRideEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });

    const result = await response.json();
    console.log('rating response ', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

//Start Ride
export const startRideAPI = async (data) => {
  try {
    console.log('test start', data)
    const url = new URL(`${BASE_URL}${startRideEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });

    const result = await response.json();

    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};


//End Ride
export const endRideAPI = async (data) => {
  try {
    const url = new URL(`${BASE_URL}${endRideEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });

    const result = await response.json();
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const cancelOfferedRideAPI = async (data) => {
  try {
    const url = new URL(`${BASE_URL}${cancelOfferride}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });

    const result = await response.json();
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const scratchCardAPI = async (data) => {
  try {
    console.log('Scratch data ', data);
    const url = new URL(`${BASE_URL}${updateScratchEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });

    const result = await response.json();

    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
}

export const requestRideAPI = async (data) => {
  try {
    const url = new URL(`${BASE_URL}${requestRideEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });

    const result = await response.json();
    console.log('End ride response ', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const getRewards = async (data) => {
  try {
    console.log('get Rewards ', data);
    console.log(`${BASE_URL}${rewardsEndPoint}`);
    const url = new URL(`${BASE_URL}${rewardsEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });
    const result = await response.json();

    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
}

export const registerDeviceAPI = async (data) => {
  try {
    const url = new URL(`${BASE_URL}${registerDevice}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });

    const result = await response.json();
    console.log('End ride response ', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const getProfileAPI = async (data) => {
  try {
    console.log(`${BASE_URL}${getProfileEndPoint}`);
    console.log(data);
    const url = new URL(`${BASE_URL}${getProfileEndPoint}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });

    const result = await response.json();
    console.log('End ride response ', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const cancelBookrideAPI = async (data) => {
  try {
    console.log(`${BASE_URL}${cancelBookride}`);
    console.log(data);
    const url = new URL(`${BASE_URL}${cancelBookride}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });

    const result = await response.json();
    console.log('customerRatingAPI ', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const customerRatingAPI = async (data) => {
  try {
    const url = new URL(`${BASE_URL}${custRating}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
      timeout: 30 * 1000,
    });

    const result = await response.json();
    console.log('customerRatingAPI ', result);
    return result;
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
};

export const getAutoSuggestionAPI = async (query) => {
  try {

    const url = `${AUTO_COMPLETE_URL}${query}`;
    console.log(url)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      // body: JSON.stringify(data),
      // timeout: 30 * 1000,
    });

    // const result = 
    // console.log('getAutoSuggestionAPI ', result);
    return await response.json();
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
}

export const getVersionInfo = async() => {
  try {
    const response = await fetch(appVersionInfoUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      }
    });
    return await response.json()
  } catch (err) {
    return { statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG }
  }
}
