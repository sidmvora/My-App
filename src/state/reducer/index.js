import { combineReducers } from "redux";
import reducer from "./authReducer";
import noteReducer from "./noteReducer";

const reducers = combineReducers({
    auth: reducer,
    note: noteReducer
})
export default reducers