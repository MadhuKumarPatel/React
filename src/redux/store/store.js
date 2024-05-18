import { legacy_createStore } from "redux";
import todoReducer from "../reducers/reducer";




export const reduxStore =legacy_createStore(todoReducer)