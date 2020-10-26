import { combineReducers } from 'redux';
import appReducer from './app.reducer';
import rideReducer from './ride.reducer';
import driverProfileReducer from './driverProfile.reducer';
import addCarReducer from './addCar.reducer';
import getDriverReducer from './getDriver.reducer';
import listRideReducer from './listRides.reducer';


const rootReducer = combineReducers({
  appReducer,
  rideReducer,
  driverProfileReducer,
  addCarReducer,
  getDriverReducer,
  listRideReducer,
});
export default rootReducer;
