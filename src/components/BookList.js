import React from 'react';
import { connect } from 'react-redux';
import BookItem from './BookItem';

const BookList = (props) => (
    <div>
        {props.books && props.books.map((book) => {
            return <BookItem key={book.id} {...book} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        books: state.books
    };
};

export default connect(mapStateToProps)(BookList);