import service from 'service/service';
import actions from 'StoreRedux/actions';
import history from 'components/History/History';

const signIn = (userId) => (dispatch) => {
    dispatch(actions.signIn(userId));
}

const signOut = () => (dispatch) => {
   dispatch(actions.signOut());
}

const createStream = (stream) => async (dispatch, getState) => {
    try {
        const {userId} = getState().auth;
        const response = await service.post('/streams', {...stream, userId});
        dispatch(actions.createStream(response.data));
        history.push('/');
    } catch(error) { 
        console.log(error);
    }
    return;
}

const fetchStreams = () => async (dispatch, getState) => {
    try {
        let streams = {}
        const response = await service.get('/streams');
        for(let i = 0; i < response.data.length; i++) {
            streams = {...streams, [response.data[i].id]: response.data[i]}
        }
        dispatch(actions.fetchStreams(streams));
    } catch(error) {
        console.log(error);
    }
   
}

const fetchStream = (id) => async (dispatch, getState) => {
    try {
        const response = await service.get(`/streams/${id}`);
        dispatch(actions.fetchStream(response.data));
    } catch(error) {
        console.log(error);
    }
  
}

const editStream = (id, values) => async (dispatch, getState) => {
    try {
        const response = await service.put(`/streams/${id}`, values);
        const streams = {...getState().fetchStreams, [id]: values}     
        dispatch(actions.editStream(streams));

    } catch(error) {
        console.log(error);
    }

}


const deleteStream = (id) => async (dispatch, getState) => {
    try {
        await service.delete(`/streams/${id}`);
        dispatch(actions.deleteStream(id));

    } catch(error) {
        console.log(error);
    }

}

export default {
    createStream,
    fetchStreams,
    fetchStream,
    signIn,
    signOut
}
