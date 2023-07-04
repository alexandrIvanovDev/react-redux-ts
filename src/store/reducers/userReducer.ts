const initialState: UserStateType = {
    users: [],
    loading: false,
    error: null
}


//reducer
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


//actions
export const fetchUsers = () => ({type: 'FETCH_USERS'}) as const
export const fetchUsersSuccess = (users: Array<UserType>) => ({type: 'FETCH_USERS_SUCCESS', payload: users}) as const
export const fetchUsersError = (error: string) => ({type: 'FETCH_USERS_ERROR', payload: error}) as const


//types
export type UserStateType = {
    users: Array<UserType>
    loading: boolean
    error: string | null
}

export type UserType = {
    id: number
    name: string
    phone: string
    email: string
    username: string
    website: string
}

type FetchUsersActionType = ReturnType<typeof fetchUsers>
type FetchUsersSuccessActionType = ReturnType<typeof fetchUsersSuccess>
type FetchUsersErrorActionType = ReturnType<typeof fetchUsersError>

type UserReducerActionsType = FetchUsersActionType | FetchUsersSuccessActionType | FetchUsersErrorActionType