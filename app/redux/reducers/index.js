import {combineReducers} from 'redux'
import listReducer from './listReducer'
import selectionReducer from "./selectionReducer";
export default combineReducers({
    portableList:listReducer,
    selectedbyId:selectionReducer,
})