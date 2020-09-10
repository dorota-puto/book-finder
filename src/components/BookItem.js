import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addBookDescription } from '../actions/books';
import getResult from '../selectors/book';

const BookItem = ({ id, title, thumbnail, dispatch }) => {

    const onClick = async () => {
        try {
            const description = await getResult(id);
            if (description) {
                dispatch(addBookDescription(id, { description: `${description}` }))
            }
        } catch (err) {

        }
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