
const searchReducerDefaultState = {
    query: '',
    message: ''
};

export default (state = searchReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_QUERY':
            return {
                ...state,
                query: action.query
            }
        case 'SET_MESSAGE':
            return {
                ...state,
                message: action.message
            }
        default:
            return state;
    }
};