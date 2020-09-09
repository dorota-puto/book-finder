import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";

export default async (query) => {
    try {
        const res = await axios(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        return res.data.items
    } catch (error) {
    
    }
};
