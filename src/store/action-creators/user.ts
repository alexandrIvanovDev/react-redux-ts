import {Dispatch} from 'redux';
import axios from 'axios';
import {UserType} from '../../types/users';

export const getUsers = () => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchUsers())
        return await axios.get<Array<UserType>>('https://jsonplaceholder.typicode.com/users')
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

export const fetchUsers = () => ({type: 'FETCH_USERS'}) as const
export const fetchUsersSuccess = (users: Array<UserType>) => ({type: 'FETCH_USERS_SUCCESS', payload: users}) as const
export const fetchUsersError = (error: string) => ({type: 'FETCH_USERS_ERROR', payload: error}) as const