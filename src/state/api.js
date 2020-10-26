import {
  BASE_URL,
  bookRideEndPoint,
  offerRideEndPoint,
  getCarsEndPoint,
  getAvailableRidesEndPoint,
  profileOtpEndPoint,
  profileEndPoint,
  driverProfileEndPoint,
  addCarEndPoint,
  getDriverEndPoint,
  listRidesEndPoint,
  confirmRideEndPoint,
  requestRideEndPoint,
  registerDevice,
  getProfileEndPoint, cancelBookride,  updateEndPoint, cancelOfferride, updateDriver, updateCar
} from '../constants/apiendpoints';
import { Alert } from 'react-native'

const ERROR_MSG = "Sorry we are unable to process your request at this moment....!, Please Try again after some time.";

export const doBookRide = async (data) => {
  try{
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
  }catch(err){
    return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
  }
 
};

export const doOfferRide = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};

export const doGetCars = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};

export const doGetAvailableRides = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};

export const doProfileOtp = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};

export const doProfile = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};

export const updateProfile = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};

//  driver profile

export const driverProfile = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};

export const updateDriverProfile = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};

export const updateCarProfile = async (data) => {
  try{
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
  }catch(err){
    return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
  }
};

//ADD CAR
export const doAddCar = async (data) => {
  try{
  console.log(`${BASE_URL}${addCarEndPoint}`);
  console.log(data);
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
  console.log('Add Car ', response);
  console.log('Add Car ', response);
  console.log('Add Car ', response);
  try{
   // const text = await response.text();
   // console.log("text :- ", text);
    const result = await response.json();
    console.log('Add Car ', result);
    return result;
  }catch(err){
    console.log(err);
    const text = await response.text();
    console.log('Add Car text ', text);

  }
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};

//Get drivers
export const doGetDrivers = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};

//Get rides
export const listRides = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};

export const confirmRideOTP = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};




export const cancelOfferedRideAPI = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};



export const requestRideAPI = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};



export const registerDeviceAPI = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};

export const getProfileAPI = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};

export const cancelBookrideAPI = async (data) => {
  try{
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
}catch(err){
  return {statusCode: 0, message: ERROR_MSG, Message: ERROR_MSG}
}
};
