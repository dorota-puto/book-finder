import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import { startAddBookToFavourites, startRemoveBookFromFavourites } from '../actions/favourites';

// remove me: bla bla

class BookDetailsPage extends React.Component {
    constructor(props) {
        // test commit 2
        super(props);

        this.state = props.isFavourite ? { ...props.isFavourite } : { ...props.book }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isFavourite !== this.props.isFavourite) {
            this.setState({
                ...this.props.isFavourite
            });
        }
        if (this.props.book && prevProps.book.description !== this.props.book.description) {
            this.setState({
                description: this.props.book.description
            });
        }
    }

    onClick = () => window.open(this.state.previewLink, "_blank");

    onClickFavourite = () => {
        if (!this.props.isFavourite) {
            this.props.dispatch(startAddBookToFavourites({ ...this.state }));
        } else {
            this.props.dispatch(startRemoveBookFromFavourites({ id: this.state.id, dataBaseId: this.state.dataBaseId }))
        }
    }

    render() {
        return (
            <div className="layout layout--grey">
                <Header />
                <div className="details-container">
                    <div className="details-header">
                        <div className="details-header__card">
                           {this.state.thumbnail && <img src={this.state.thumbnail} />}
                        </div>
                        <div className="details-header__buttons">
                            <button className={`button ${this.props.isFavourite ? "button--love" : ""}`}
                                onClick={this.onClickFavourite}
                            >
                                <ion-icon name="heart"></ion-icon>
                            </button>
                            <button className="button" onClick={this.onClick}>PREVIEW</button>
                        </div>

                    </div>

                    <h3>Title: {this.state.title}</h3>
                    {this.state.subtitle && <p>Subtitle: {this.state.subtitle}</p>}
                    {this.state.authors && <p>Authors: {this.state.authors}</p>}
                    {this.state.publisher && <p>Publisher: {this.state.publisher}</p>}
                    <div className="details-description" dangerouslySetInnerHTML={{ __html: this.state.description }} />

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, props) => {
    return {
        book: state.books.find((book) => book.id === props.match.params.id),
        favourites: state.favourites,
        isFavourite: state.favourites.find((book) => book.id === props.match.params.id)
    }
}
export default connect(mapStateToProps)(BookDetailsPage);