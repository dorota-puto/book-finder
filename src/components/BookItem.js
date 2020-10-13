import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startAddBookDescription } from '../actions/books';

const BookItem = ({ id, title, thumbnail, dispatch }) => {

    const onClick = () => {
        dispatch(startAddBookDescription(id));
    };

    return (
        <div>
            <Link to={`/details/${id}`}
                onClick={onClick}
            >
                <img src={thumbnail} alt={title} />
            </Link>
        </div>
    );
};

export default connect()(BookItem);