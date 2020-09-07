import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ id, title, authors, image, description }) => (
    <div>
        <h3>
            {title} - {authors}
        </h3>
    </div>
);

export default BookItem;