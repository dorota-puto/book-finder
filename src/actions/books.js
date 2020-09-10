
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

export const addBookDescription = (id,  updates ) => ({
    type: 'ADD_BOOK_DESCRIPTION',
    id,
    updates
});

export const deleteBooks = () => ({
    type: 'DELETE_BOOKS'
});