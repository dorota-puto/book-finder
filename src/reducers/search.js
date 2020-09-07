
const searchReducerDefaultState = {
    text: ''
};

export default (state = searchReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_QUERY':
            return {
                ...state,
                query: action.query
            }
        default:
            return state;
    }
};