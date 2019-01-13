
import types from '../types';

const signIn = () => {
    return {
        type: types.SIGN_IN
    }
}

const signOut = () => {
    return {
        type: types.SIGN_OUT
    }
}

const createStream = (value) => {
    console.log('in createStream action')
    return  {
        type: types.CREATE_STREAM,
        payload: value
    }
}

const fetchStreams = (value) => {
    return {
        type: types.FETCH_STREAMS,
        payload: value
    }
}

const fetchStream = (value) => {
    return {
        type: types.FETCH_STREAM,
        payload: value
    }
}

const editStream = (value) => {
    return  {
        type: types.EDIT_STREAM,
        payload: value
    }
}

const deleteStream = (value) => {
    return {
        type: types.DELETE_STREAM,
        payload: value
    }
}

export default {
    signIn,
    signOut,
    createStream,
    fetchStreams,
    editStream,
    deleteStream
}