import {AnyAction, applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {rootReducer, RootStateType} from './reducers';
import {useDispatch} from 'react-redux';

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppThunkDispatch = ThunkDispatch<RootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()