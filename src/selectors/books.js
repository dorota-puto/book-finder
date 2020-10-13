import axios from 'axios';

export default async (query) => {
    try {
        const res = await axios(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`);
        return res.data.items
    } catch (err) {
    
    }
};
