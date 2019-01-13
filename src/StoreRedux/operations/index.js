import service from 'service/service';
import actions from 'StoreRedux/actions'
import { async } from 'q';

const createStream = (stream) => async (dispatch, getState) => {
    try {
        const response = await service.post('/streams', stream);
        dispatch(actions.createStream(response.data));
    } catch(error) { 
        console.log(error);
    }
    return;
}

const fetchStreams = () => async (dispatch, getState) => {
    try {
        const response = await service.get('/streams');
        dispatch(actions.fetchStreams(response.data));
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
        const streams = {...getState().fetchStream, [id]: values}     
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
}
