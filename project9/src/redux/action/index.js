import { database } from "../../firebase";
import { history} from "../history/index";
export const createNote = (item) => {
    return async (dispatch) => { database.push(item) }
};

export const fetchNote = () => {
    return async (dispatch) => {
        dispatch({type: "NOTE_STATUS", payload:true})
        await database.on("value", (snapshot) => {
            let a = snapshot.val();
            dispatch({ type: "FETCH_NOTE", payload: a });
            dispatch({ type: "NOTE_STATUS", payload: false });
        });;
    }
};
export const updateNote = (id, note) => {
    return async (dispatch) => {
        await database.child(id).update(note);
        history.push("/home");
        window.location.reload();
    }
}

export const removeNote = (id) => {
    return async (dispatch) => {
        await database.child(id).remove();
    }
};