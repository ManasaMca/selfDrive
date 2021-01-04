import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './action-types';

import { doBookRide, doOfferRide, doGetCars, doGetAvailableRides, doProfileOtp, 
      doProfile, driverProfile, doAddCar, doGetDrivers, listRides, rateRides, 
      endRideAPI, scratchCardAPI, getRewards, getProfileAPI, startRideAPI } from './api';

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

function* rateRidesSaga(action) {
  try {
    const result = yield call(rateRides, action.payload);
    yield put({ type: ActionTypes.RATING_RIDE_SUCCESS, result });
  } catch (error) {
    console.log('rate rides error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}


function* startRideSaga(action) {
  try {
    const result = yield call(startRideAPI, action.payload);
    yield put({ type: ActionTypes.START_RIDE_SUCCESS, result });

  } catch (error) {
    console.log('Start rides error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}

function* endRideSaga(action) {
  try {
    console.log("end saga")
    const result = yield call(endRideAPI, action.payload);
    yield put({ type: ActionTypes.END_RIDE_SUCCESS, result });
  } catch (error) {
    console.log('End rides error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}

function* scratchCardSaga(action) {
  try {
    console.log("Scratch saga")
    const result = yield call(scratchCardAPI, action.payload);
    yield put({ type: ActionTypes.UPDATE_SCRATCH_SUCCESS, result });
  } catch (error) {
    console.log('Scratch error', error);
    yield put({ type: ActionTypes.API_ERROR, error });
  }
}

function* rewardsSaga(action) {
  try {
    console.log("Rewards api saga")
    const result = yield call(getRewards, action.payload);
    yield put({ type: ActionTypes.GET_REWARDS_SUCCESS, result });
  } catch (error) {
    console.log('Scratch error', error);
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
  yield takeEvery(ActionTypes.RATING_RIDE_REQUEST, rateRidesSaga)
  yield takeEvery(ActionTypes.START_RIDE_REQUEST, startRideSaga)
  yield takeEvery(ActionTypes.END_RIDE_REQUEST, endRideSaga)
  yield takeEvery(ActionTypes.UPDATE_SCRATCH_REQUEST, scratchCardSaga)
  yield takeEvery(ActionTypes.GET_REWARDS_REQUEST, rewardsSaga)
}
