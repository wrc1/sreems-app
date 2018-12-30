import { combineReducers } from 'redux';
import { authReducer  } from 'StoreRedux/reducers/authReducer';
export default combineReducers({
    auth: authReducer
})