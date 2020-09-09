import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ id, title, thumbnail }) => (
    <div>
        <Link to={`/details/${id}`}>
            <img src={thumbnail} alt={title} />
        </Link>
    </div>
);

export default BookItem;