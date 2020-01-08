import { combineReducers } from "redux";
import FetchNote from "../reducer/fetchNote";
import { AuthReducer } from "../reducer/auth";
import Loading from "../reducer/loading";
const reducers = combineReducers({note: FetchNote, auth: AuthReducer, spinner: Loading});
export default reducers;