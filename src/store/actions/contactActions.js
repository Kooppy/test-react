import api from '../../config/axios';
import { GET_MESSAGE, POST_MESSAGE } from './actionTypes';

export const getMessage = () => {
    return (dispatch) => {
        return api.get('/look')
        .then((res) => {
            dispatch({ type: GET_MESSAGE, payload: res.data });
        })
        .catch((err) => console.log(err));
    }
}

export const postMessage = (form) => {
    return (dispatch) => {
        return api.post('/sendMessage', form)
        .then((res) => {
            dispatch({ type: POST_MESSAGE, payload: res.data });
        })
        .catch((err) => console.log(err));
    }
}