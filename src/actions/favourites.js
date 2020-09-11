export const addBookToFavourites = ({
    id = '',
    title = '',
    subtitle = '',
    authors = '',
    publisher = '',
    categories = '',
    description = '',
    thumbnail = '',
    previewLink = ''
} = {}) => (
        {
            type: 'ADD_TO_FAVOURITES',
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

export const removeBookFromFavourites = ({ id } = {}) => ({
    type: 'REMOVE_FROM_FAVOURITES',
    id
})