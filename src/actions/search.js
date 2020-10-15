
export const searchBook = (query = '') => ({
    type: 'SET_QUERY',
    query
});

export const setMessage = (message = '') => ({
    type: 'SET_MESSAGE',
    message
})