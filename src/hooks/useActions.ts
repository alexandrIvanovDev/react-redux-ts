import {useAppDispatch} from '../store/store';
import {bindActionCreators} from 'redux';
import * as UserActionCreators from '../store/action-creators/user'


export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}