import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ id, title, authors, thumbnail, description }) => (
    <div>
        <h3>
            <img src={`${thumbnail}`} alt={`${title}`} />
        </h3>
    </div>
);

export default BookItem;