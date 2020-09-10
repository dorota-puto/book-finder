import axios from 'axios';

export default async (volumeId) => {
    try {
        const res = await axios(`https://www.googleapis.com/books/v1/volumes/${volumeId}`);
        return res.data.volumeInfo.description
    } catch (error) {

    }
};
