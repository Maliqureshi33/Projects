const initialState = {
    icons : []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case "SET_APP_ICONS":
            return state = {
                ...state,
                ...action.icons,
            };
        
        default:
            return state;
    }
}