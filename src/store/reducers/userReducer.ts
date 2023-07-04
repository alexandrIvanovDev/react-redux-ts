import {UserReducerActionsType, UserStateType} from '../../types/users';

const initialState: UserStateType = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserReducerActionsType): UserStateType => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {users: [], loading: true, error: null}
        case 'FETCH_USERS_SUCCESS':
            return {users: action.payload, loading: false, error: null}
        case 'FETCH_USERS_ERROR':
            return {users: [], loading: false, error: action.payload}
        default:
            return state
    }
}