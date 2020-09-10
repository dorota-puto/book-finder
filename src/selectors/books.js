import axios from 'axios';

export default async (query) => {
    try {
        const res = await axios(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`);
        return res.data.items
    } catch (error) {
    
    }
};
