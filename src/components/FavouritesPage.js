import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import BookItem from './BookItem';

class FavouritesPage extends React.Component {

  render() {
    return (
      <div className="layout">
      <Header />
      <div className="book-container">
        {this.props.books && this.props.books.map((book) => {
          return (
            <div key={book.id}>
                <BookItem {...book} />
            </div>
        )
        })}
      </div>
      
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
