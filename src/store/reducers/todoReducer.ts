import {TodoReducerActionsType, TodoStateType} from '../../types/todo';

const initialState: TodoStateType = {
    todo: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}

export const todoReducer = (state = initialState, action: TodoReducerActionsType): TodoStateType => {
    switch (action.type) {
        case 'FETCH_TODO':
            return {...state, loading: true}
        case 'FETCH_TODO_SUCCESS':
            return {...state, loading: false, todo: action.payload}
        case 'FETCH_TODO_ERROR':
            return {...state, loading: false, error: action.payload}
        case 'CHANGE_TODO_PAGE':
            return {...state, page: action.payload.page, limit: action.payload.limit}
        default:
            return state
    }
}