import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './action-types';

import { doBookRide, doOfferRide, doGetCars, doGetAvailableRides, doProfileOtp, 
      doProfile, driverProfile, doAddCar, doGetDrivers, listRides,  
      getProfileAPI } from './api';

function* doBookRideSaga(action) {
  try {
    const result = yield call(doBookRide, action.payload);
    yield put({ type: ActionTypes.DO_BOOK_RIDE_SUCCESS, result });
  } catch (error) {
    console.log('Do Book Ride Error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}

function* doOfferRideSaga(action) {
  try {
    const result = yield call(doOfferRide, action.payload);
    yield put({ type: ActionTypes.DO_OFFER_RIDE_SUCCESS, result });
  } catch (error) {
    console.log('Do Offer Ride Error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}

function* doGetCarsSaga(action) {
  try {
    const result = yield call(doGetCars, action.payload);
    yield put({ type: ActionTypes.DO_GET_CARS_SUCCESS, result });
  } catch (error) {
    console.log('Do Get Cars Error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}

function* doAvailableRidesSaga(action) {
  try {
    const result = yield call(doGetAvailableRides, action.payload);
    yield put({ type: ActionTypes.DO_GET_AVAILABLE_RIDES_SUCCESS, result });
  } catch (error) {
    console.log('Do Get Available Rides Error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}

function* doProfileOtpSaga(action) {
  try {
    const result = yield call(doProfileOtp, action.payload);
    yield put({ type: ActionTypes.DO_GET_LOGIN_SUCCESS, result });
  } catch (error) {
    console.log('Profile OTP error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}

function* getProfileOtpSaga(action) {
  try {
    const result = yield call(getProfileAPI, action.payload);
    yield put({ type: ActionTypes.DO_LOGIN_SUCCESS, result });
  } catch (error) {
    console.log('Profile OTP error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}

function* doProfileSaga(action) {
  try {
    const result = yield call(doProfile, action.payload);
    yield put({ type: ActionTypes.DO_PROFILE_SUCCESS, result });
  } catch (error) {
    console.log('Do profile data error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}

function* driverProfileSaga(action) {
  try {
    const result = yield call(driverProfile, action.payload);
    yield put({ type: ActionTypes.DO_DRIVER_PROFILE_SUCCESS, result });
  } catch (error) {
    console.log('Add driver profile error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}

function* doAddCarSaga(action) {
  try {
    const result = yield call(doAddCar, action.payload);
    yield put({ type: ActionTypes.DO_ADD_CAR_SUCCESS, result });
  } catch (error) {
    console.log('Add car error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}

function* doGetDriversSaga(action) {
  try {
    const result = yield call(doGetDrivers, action.payload);
    yield put({ type: ActionTypes.DO_GET_DRIVER_SUCCESS, result });
  } catch (error) {
    console.log('get drivers error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}

function* listRidesSaga(action) {
  try {
    const result = yield call(listRides, action.payload);
    yield put({ type: ActionTypes.LIST_RIDE_SUCCESS, result });
  } catch (error) {
    console.log('get list rides error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}





export default function* watchUserSaga() {
  yield takeEvery(ActionTypes.DO_BOOK_RIDE_REQUEST, doBookRideSaga);
  yield takeEvery(ActionTypes.DO_OFFER_RIDE_REQUEST, doOfferRideSaga);
  yield takeEvery(ActionTypes.DO_GET_CARS_REQUEST, doGetCarsSaga);
  yield takeEvery(ActionTypes.DO_GET_AVAILABLE_RIDES_REQUEST, doAvailableRidesSaga);
  yield takeEvery(ActionTypes.DO_LOGIN_REQUEST, doProfileOtpSaga);
  yield takeEvery(ActionTypes.DO_GET_LOGIN_REQUEST, getProfileOtpSaga);

  yield takeEvery(ActionTypes.DO_PROFILE_REQUEST, doProfileSaga);
  yield takeEvery(ActionTypes.DO_GET_AVAILABLE_RIDES_REQUEST, doAvailableRidesSaga);
  yield takeEvery(ActionTypes.DO_DRIVER_PROFILE_REQUEST, driverProfileSaga);
  yield takeEvery(ActionTypes.DO_ADD_CAR_REQUEST, doAddCarSaga)
  yield takeEvery(ActionTypes.DO_GET_DRIVER_REQUEST, doGetDriversSaga)
  yield takeEvery(ActionTypes.LIST_RIDE_REQUEST, listRidesSaga)
}
