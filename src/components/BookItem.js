import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startAddBookDescription } from '../actions/books';

const BookItem = ({ id, title, thumbnail, dispatch }) => {

    const onClick = () => {
        dispatch(startAddBookDescription(id));
    };

    return (
        <div className="card">
            <Link to={`/details/${id}`}
                onClick={onClick}
            >
                <img src={thumbnail} onError={(e)=>{e.target.onerror = null; e.target.src="/images/book.jpeg"}}/>
                {!thumbnail &&<p>{title}</p>}
            </Link>
        </div>
    );
};

export default connect()(BookItem);