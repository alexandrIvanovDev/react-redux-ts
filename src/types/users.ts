import {fetchUsers, fetchUsersError, fetchUsersSuccess} from '../store/action-creators/user';

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

export type UserReducerActionsType = FetchUsersActionType | FetchUsersSuccessActionType | FetchUsersErrorActionType