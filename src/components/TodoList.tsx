import React, {useEffect} from 'react';
import {useActions} from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';

export const TodoList = () => {

    const {todo, loading, error, page, limit} = useTypedSelector(state => state.todo)

    const {getTodos, changeTodoPage} = useActions()

    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        getTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Идет загрузка</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todo.map(t => <div key={t.id}>{t.id}. {t.title}</div>)}
            <div style={{display: 'flex'}}>
                {pages.map(p => <div
                    key={p}
                    onClick={() => changeTodoPage(p, limit)}
                    style={{border: p === page ? '2px solid red' : '1px solid gray', padding: 10, cursor: 'pointer'}}
                    >{p}</div>
                )}
            </div>
        </div>
    )
}