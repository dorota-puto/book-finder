import axios from 'axios';

export const getDescription = async (volumeId) => {
    try {
        const res = await axios(`https://www.googleapis.com/books/v1/volumes/${volumeId}`);
        return res.data.volumeInfo.description
    } catch (error) {

    }
};

// export const getImage = async (volumeId) => {
//     try {
//         const res = await axios(`https://www.googleapis.com/books/v1/volumes/${volumeId}`);
//         return res.data.volumeInfo.imageLinks.medium
//     } catch (error) {

//     }
// };