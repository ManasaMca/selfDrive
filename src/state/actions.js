import { ActionTypes } from './action-types';

export const doBookRideRequest = (data) => {
  return { type: ActionTypes.DO_BOOK_RIDE_REQUEST, payload: data };
};

export const doOfferRideRequest = (data) => {
  return { type: ActionTypes.DO_OFFER_RIDE_REQUEST, payload: data };
};

export const doGetCarsRequest = (data) => {
  return { type: ActionTypes.DO_GET_CARS_REQUEST, payload: data };
};

export const doGetAvailableRidesRequest = (data) => {
  return { type: ActionTypes.DO_GET_AVAILABLE_RIDES_REQUEST, payload: data };
};

export const doProfileOtpRequest = (data) => {
  return { type: ActionTypes.DO_LOGIN_REQUEST, payload: data };
};

export const doGetProfileRequest = (data) => {
  return { type: ActionTypes.DO_GET_LOGIN_REQUEST, payload: data };
};

export const doGetProfileRequestSuccess = (data) => {
  return { type: ActionTypes.DO_LOGIN_SUCCESS, result: data };
};

export const doGetProfileRequestSuccess2 = (data) => {
  return { type: ActionTypes.DO_GET_LOGIN_SUCCESS, result: data };
};

export const doProfileRequest = (data) => {
  return { type: ActionTypes.DO_PROFILE_REQUEST, payload: data };
}

export const doDriverProfileRequest = (data) => {
  return { type: ActionTypes.DO_DRIVER_PROFILE_REQUEST, payload: data };
};


export const doAddCarRequest = (data) => {
  return { type: ActionTypes.DO_ADD_CAR_REQUEST, payload: data };
};

export const doGetDriverRequest = (data) => {
  return { type: ActionTypes.DO_GET_DRIVER_REQUEST, payload: data };
};

export const listRides = (data) => {
  return { type: ActionTypes.LIST_RIDE_REQUEST, payload: data };
};


