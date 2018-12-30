
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

export default {
    signIn,
    signOut
}