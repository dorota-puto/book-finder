
const favouritesReducerDefaultState = [];

export default (state = favouritesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return [
                ...state,
                action.book
            ];
        case 'REMOVE_FROM_FAVOURITES':
            return state.filter(({ id }) => id !== action.id);
        case 'SET_FAVOURITES':
            return action.favourites
        default:
            return state;
    };
}

