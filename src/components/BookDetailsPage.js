import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBookToFavourites, removeBookFromFavourites } from '../actions/favourites';

class BookDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.book
        }
    }

    onClick = () => window.open(this.props.book.previewLink, "_blank");

    onClickFavourite = () => {
        if (!this.props.isFavourite) {
            this.props.dispatch(addBookToFavourites({ ...this.state }));
        } else {
            this.props.dispatch(removeBookFromFavourites({id: this.state.id}))
        }
    }

    render() {
        return (
            <div>
                <img src={this.props.book.thumbnail} />
                <h3>Title: {this.state.title}</h3>
                {this.state.subtitle && <p>Subtitle: {this.state.subtitle}</p>}
                {this.state.authors && <p>Authors: {this.state.authors}</p>}
                {this.state.publisher && <p>Publisher: {this.state.publisher}</p>}
                <div dangerouslySetInnerHTML={{ __html: this.props.book.description }} />
                <button onClick={this.onClick}>PREVIEW</button>
                <button
                    onClick={this.onClickFavourite}
                >
                    <ion-icon name="heart"></ion-icon>
                </button>
            </div>
        )
    }
};
const mapStateToProps = (state, props) => {
    return {
        book: state.books.find((book) => book.id === props.match.params.id),
        favourites: state.favourites,
        isFavourite: state.favourites.find((book) => book.id === props.match.params.id)
    }
}
export default connect(mapStateToProps)(BookDetailsPage);