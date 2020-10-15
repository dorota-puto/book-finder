import { getDescription } from '../selectors/book';
import getResults from '../selectors/books';
import { setMessage } from './search';

export const addBook = ({
    id = '',
    title = '',
    subtitle = '',
    authors = '',
    publisher = '',
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
        thumbnail,
        previewLink
    }
});

export const startAddBook = (query) => {
    return (dispatch) => {
        return getResults(query).then((books) => {
            books.forEach((book) => {
                dispatch(addBook({ ...book, ...book.volumeInfo, ...book.volumeInfo.imageLinks }))
            });
            dispatch(setMessage(''))
        }).catch((error) => {
            dispatch(setMessage('No books to show...'))
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
            description && dispatch(addBookUpdates(id, { description: `${description}` }))
        })
    };
};

export const deleteBooks = () => ({
    type: 'DELETE_BOOKS'
});

export const startDeleteBooks = () => {
    return (dispatch) => {
        dispatch(deleteBooks())
        dispatch(setMessage('Searching...'))
    }
}