import {Dispatch} from 'redux';
import axios from 'axios';
import {TodoType} from '../../types/todo';

export const getTodos = (page = 1, limit = 10) => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchTodo())
        return await axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos',
            {params: {_page: page, _limit: limit}})
            .then(res => res.data)
            .then(data => {
                setTimeout(() => {
                    dispatch(fetchTodoSuccess(data))
                }, 1000)
            })
    } catch (e) {
        dispatch(fetchTodoError('Произошла ошибка при загрузке тудулиста'))
    }
}

export const fetchTodo = () => ({type: 'FETCH_TODO'}) as const
export const fetchTodoSuccess = (todo: Array<TodoType>) => ({type: 'FETCH_TODO_SUCCESS', payload: todo}) as const
export const fetchTodoError = (error: string) => ({type: 'FETCH_TODO_ERROR', payload: error}) as const
export const changeTodoPage = (page: number, limit: number) => ({type: 'CHANGE_TODO_PAGE', payload: {page, limit}}) as const