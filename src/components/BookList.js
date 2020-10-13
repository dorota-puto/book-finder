import React from 'react';
import { connect } from 'react-redux';
import BookItem from './BookItem';

const BookList = (props) => {
 
    return (
        <div className="content">

            {props.books && props.books.map((book) => {
                return (
                    <div key={book.id}>
                        <BookItem {...book} />
                    </div>
                )
            })}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        books: state.books
    };
};

export default connect(mapStateToProps)(BookList);