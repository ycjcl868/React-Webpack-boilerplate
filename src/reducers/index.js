import { combineReducers } from 'redux'
import todos from './todo'
import counter from './counter'

export default combineReducers({
    todos,
    counter
})