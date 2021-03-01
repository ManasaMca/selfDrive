import { combineReducers} from 'redux';
import userReducer from './userreducers';
import carReducer from './carreducers';
import availCars from './availablecars'
const rootReducer = combineReducers({
    userReducer,
    carReducer,
    availCars
})

export default rootReducer