
export const addBook = ({ id = '', title = '', authors = '', image = '', description = '' } = {}) => ({
    type: 'ADD_BOOK',
    book: {
        id,
        title,
        authors,
        image,
        description
    }
});

export const deleteBooks = () => ({
    type: 'DELETE_BOOKS'
});