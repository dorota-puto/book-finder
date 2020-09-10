
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
        case 'ADD_BOOK_DESCRIPTION':
            return state.map((book) => {
                if (book.id === action.id) {
                    return {
                        ...book,
                        ...action.updates
                    }
                } else {
                    return book;
                }
            });
        default:
            return state;
    };
}

