import {changeTodoPage, fetchTodo, fetchTodoError, fetchTodoSuccess} from '../store/action-creators/todo';

export type TodoStateType = {
    todo: Array<TodoType>
    loading: boolean
    error: string | null
    page: number
    limit: number
}

export type TodoType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

type FetchTodoActionType = ReturnType<typeof fetchTodo>
type FetchTodoSuccessActionType = ReturnType<typeof fetchTodoSuccess>
type FetchTodoErrorActionType = ReturnType<typeof fetchTodoError>
type ChangeTodoPageActionType = ReturnType<typeof changeTodoPage>

export type TodoReducerActionsType =
    FetchTodoActionType
    | FetchTodoSuccessActionType
    | FetchTodoErrorActionType
    | ChangeTodoPageActionType