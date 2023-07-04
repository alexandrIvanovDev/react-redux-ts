import React, {FC, useEffect} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';

export const UsersList: FC = () => {

    const {users, loading, error} = useTypedSelector(state => state.user)

    const {getUsers} = useActions()

    useEffect(() => {
        getUsers()
    }, [])

    if (loading) {
        return <h1>Идет загрузка</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {error && <h2>{error}</h2>}
            <div>{users.map(u => <div key={u.id}>{u.name}</div>)}</div>
        </div>
    );
};