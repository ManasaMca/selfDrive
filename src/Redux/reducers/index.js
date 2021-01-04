import { combineReducers} from 'redux';
import userReducer from './userreducers';
import carReducer from './carreducers';
const rootReducer = combineReducers({
    userReducer,
    carReducer
})

export default rootReducer