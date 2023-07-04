import {Dispatch} from 'redux';
import {fetchUsers, fetchUsersError, fetchUsersSuccess} from '../reducers/userReducer';
import axios from 'axios';

export const getUsers = () => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchUsers())
        return await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data)
            .then(data => {
                setTimeout(() => {
                    dispatch(fetchUsersSuccess(data))
                }, 1000)
            })
    } catch (e) {
        dispatch(fetchUsersError('Произошла ошибка'))
    }
}