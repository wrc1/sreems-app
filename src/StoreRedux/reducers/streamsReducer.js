import types from '../types';

export const createStreamReducer = (state = {}, action) => {
    switch(types.CREATE_STREAM) {
        case action.type: 
            return action.payload
        default: return state;    
    }
}

export const fetchStreamsReducer = (state = {}, action) => {
    switch(types.FETCH_STREAMS) {
        case action.type:
            return action.payload;
        default: return state;    
    }
} 


export const fetchStreamReducer = (state = {}, action) => {
    switch(types.FETCH_STREAM) {
        case action.type:
            return action.payload;
        default: return state;    
    }
} 

export const editStreamReducer = (state = {}, action) => {
    switch(types.EDIT_STREAM) {
        case action.type:
            return action.payload
        default: return state;
    }
}

export const deleteStreamReducer = (state = {}, action) => {
    switch(types.DELETE_STREAM) {
        case action.type:
            return action.payload
        default: return state;
    }
}

// export default {
//     fetchStream: fetchStreamReducer,
//     fetchStreams: fetchStreamsReducer,
//     createStream: createStreamReducer
// }