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
                dataBaseId: ref.key,
                ...book
            }));
        })
    };
};

export const setFavourites = (favourites) => ({
    type: 'SET_FAVOURITES',
    favourites
});

export const startSetFavourites = () => {
    return (dispatch) => {
        return database.ref('favourites').once('value').then((snapshot) => {
            const favourites = [];

            snapshot.forEach((childSnapshot) => {
                favourites.push({
                    dataBaseId: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setFavourites(favourites));
        });
    };
};

export const removeBookFromFavourites = ({ id } = {}) => ({
    type: 'REMOVE_FROM_FAVOURITES',
    id
});

export const startRemoveBookFromFavourites = ({ id, dataBaseId } = {}) => {
    return (dispatch) => {
        return database.ref(`favourites/${dataBaseId}`).remove().then(() => {
            dispatch(removeBookFromFavourites({ id }))
        })
    };
};