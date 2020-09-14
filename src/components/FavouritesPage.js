import React from 'react';
import { connect } from 'react-redux';
import BookItem from './BookItem';

class FavouritesPage extends React.Component {

  render() {
    return (
      <div>
        {this.props.books && this.props.books.map((book) => {
          return <BookItem key={book.id} {...book} />
        })}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
      books: state.favourites
  };
};

export default connect(mapStateToProps)(FavouritesPage);
