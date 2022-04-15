import { combineReducers } from "redux";
import CovidDataReducer from "./CovidDataReducer";


const reducers=combineReducers({
    report:CovidDataReducer,
})

export default reducers;