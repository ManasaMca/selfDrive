import { combineReducers } from 'redux';
import appReducer from './app.reducer';
import rideReducer from './ride.reducer';
import driverProfileReducer from './driverProfile.reducer';
import addCarReducer from './addCar.reducer';
import getDriverReducer from './getDriver.reducer';
import listRideReducer from './listRides.reducer';
import rateRideReducer from './rateRides.reducer';
import scratchCardReducer from './scratchCard.reducer';


const rootReducer = combineReducers({
  appReducer,
  rideReducer,
  driverProfileReducer,
  addCarReducer,
  getDriverReducer,
  listRideReducer,
  rateRideReducer,
  scratchCardReducer
});
export default rootReducer;
