import {combineReducers} from "redux"
import {counterReducer} from "./counterReducer"
import {loginReducer} from "./loginReducer"

export const allReducer = combineReducers({
    counter: counterReducer,
    login: loginReducer
})