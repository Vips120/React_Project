const Loading = (state = {}, action) => {
    switch (action.type) {
        case "NOTE_STATUS":
            return { ...state, note: action.payload };
        case "AUTH_STATUS":
            return { ...state, auth: action.payload };
        default:
            return state;
    }
};

export default Loading;