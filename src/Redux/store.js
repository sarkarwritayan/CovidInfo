import { applyMiddleware, createStore } from "redux";
import reducers from "./Reducers/index";
import thunk from "redux-thunk";


const Store=createStore(reducers,{},applyMiddleware(thunk));

export default Store;