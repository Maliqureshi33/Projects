const initialState = {
    lang: "en-US",
    direction: "left"
  }

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_LANG":
            return {
                ...state,
                lang: action.lang.lang,
                direction: action.lang.direction,
            };

        default:
            return state;
    }
};
