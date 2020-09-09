
export const addBook = ({ id = '', title = '', authors = '', thumbnail = '', description = '' } = {}) => ({
    type: 'ADD_BOOK',
    book: {
        id,
        title,
        authors,
        thumbnail,
        description
    }
});

export const deleteBooks = () => ({
    type: 'DELETE_BOOKS'
});