import axios from "axios";
export const fetchpostlist = () => {
    return async (dispatch) => {
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
        dispatch({ type: "FETCH_LIST", payload: response.data });
    }
};

export const fetchuserslist = (id) => {
    return async (dispatch) => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: "FETCH_USER", payload: response.data });
}
    

}