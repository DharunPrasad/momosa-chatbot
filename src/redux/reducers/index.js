import {combineReducers} from "redux"
import { schemeReducer } from "./schemeReducer"
import { benReducer } from "./benReducer"
const reducers = combineReducers ({
  schemeReducer,
  benReducer
})

export default reducers