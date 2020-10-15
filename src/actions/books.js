import { getDescription } from '../selectors/book';
import getResults from '../selectors/books';

export const addBook = ({
    id = '',
    title = '',
    subtitle = '',
    authors = '',
    publisher = '',
    categories = '',
    description = '',
    thumbnail = '',
    previewLink = ''
} = {}) => ({
    type: 'ADD_BOOK',
    book: {
        id,
        title,
        subtitle,
        authors,
        publisher,
        categories,
        thumbnail,
        description,
        previewLink
    }
});

export const startAddBook = (query) => {
    return (dispatch) => {
        return getResults(query).then((books) => {
            books.forEach((book) => {
                dispatch(addBook({ ...book, ...book.volumeInfo, ...book.volumeInfo.imageLinks }))
            });
        }).catch((error) => {
        });

    };
};

export const addBookUpdates = (id, updates) => ({
    type: 'ADD_BOOK_UPDATES',
    id,
    updates
});

export const startAddBookDescription = (id) => {
    return (dispatch) => {
        return getDescription(id).then((description) => {
            dispatch(addBookUpdates(id, { description: `${description}` }))
        })
    };
};

export const deleteBooks = () => ({
    type: 'DELETE_BOOKS'
});