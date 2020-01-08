import { database, auth, googleProvider } from "../../firebase";
import { history} from "../history/index";

export const GoogleAuth = () => {
    return async(dispatch) => {
         await auth.signInWithPopup(googleProvider);
        history.push("/home");
        window.location.reload();
    }
};

export const FetchUserAuthData = () => {
    return async (dispatch) => {
        dispatch({ type: "AUTH_STATUS", payload: true });
        await auth.onAuthStateChanged(data => {
            dispatch({ type: "FETCH_AUTHDATA", payload: data });
            dispatch({ type: "AUTH_STATUS", payload: false });
        })
    }
};

export const Signout = () => {
    return async (dispatch) => {
        await auth.signOut();
        history.push("/login");
    }
}