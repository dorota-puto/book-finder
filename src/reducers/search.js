
const searchReducerDefaultState = {
    text: ''
};

export default (state = searchReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return {
                ...state,
                text: action.text
            }
        default:
            return state;
    }
};