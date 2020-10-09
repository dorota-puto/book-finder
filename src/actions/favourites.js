import database from '../firebase/firebase';

export const addBookToFavourites = (book) => ({
    type: 'ADD_TO_FAVOURITES',
    book
});

export const startAddBookToFavourites = (bookData = {}) => {
    return (dispatch) => {
        const {
            id = '',
            title = '',
            subtitle = '',
            authors = '',
            publisher = '',
            categories = '',
            description = '',
            thumbnail = '',
            previewLink = ''
        } = bookData;

        const book = {
            id,
            title,
            subtitle,
            authors,
            publisher,
            categories,
            description,
            thumbnail,
            previewLink
        };

        database.ref('favourites').push(book).then((ref) => {
            dispatch(addBookToFavourites({
                id: ref.key,
                ...book
            }));
        })
    };
};

export const removeBookFromFavourites = ({ id } = {}) => ({
    type: 'REMOVE_FROM_FAVOURITES',
    id
});