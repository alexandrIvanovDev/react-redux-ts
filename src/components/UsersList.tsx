import React, {FC} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';

export const UsersList: FC = () => {

    const {users, loading, error} = useTypedSelector(state => state.user)

    return (
        <div>

        </div>
    );
};