
const loadFavourites = () => {
    const favJSON = localStorage.getItem('books')

    try {
        return favJSON ? JSON.parse(favJSON) : []
    } catch (e) {
        return []
    }
}

const favouritesReducerDefaultState = loadFavourites();

export default (state = favouritesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            let books = [...state, action.book]
            localStorage.setItem('books', JSON.stringify(books))
            return books
        case 'REMOVE_FROM_FAVOURITES':
            books = state.filter(({ id }) => id !== action.id);
            localStorage.setItem('books', JSON.stringify(books))
            return books
        default:
            return state;
    };
}

