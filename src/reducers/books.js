
const booksReducerDefaultState = [];

export default (state = booksReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state,
                action.book
            ];
        case 'DELETE_BOOKS':
            return [
                ...booksReducerDefaultState
            ];
        default:
            return state;
    };
}

