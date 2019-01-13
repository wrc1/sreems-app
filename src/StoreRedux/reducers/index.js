import { combineReducers } from 'redux';
import { authReducer  } from 'StoreRedux/reducers/authReducer';
import { reducer as formReducer } from 'redux-form';
import { createStreamReducer, fetchStreamsReducer } from 'StoreRedux/reducers/streamsReducer'; 
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    createStream: createStreamReducer,
    fetchStreams: fetchStreamsReducer
})