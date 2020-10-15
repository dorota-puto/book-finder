import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startAddBookDescription } from '../actions/books';

const BookItem = ({ id, title, thumbnail, dispatch }) => {

    const onClick = () => {
        dispatch(startAddBookDescription(id));
    };

    return (
        <div className={`book-container__card ${!thumbnail && "book-container__card--default"}`}>
            <Link to={`/details/${id}`}
                onClick={onClick}
            >
                {thumbnail ? <img src={thumbnail} /> : <div className="book-container__title">{title}</div>}
            </Link>
        </div>
    );
};

export default connect()(BookItem);