import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import { startAddBookToFavourites, startRemoveBookFromFavourites } from '../actions/favourites';
class BookDetailsPage extends React.Component {
    constructor(props) {
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

    onClick = () => window.open(this.props.book.previewLink, "_blank");

    onClickFavourite = () => {
        if (!this.props.isFavourite) {
            this.props.dispatch(startAddBookToFavourites({ ...this.state }));
        } else {
            this.props.dispatch(startRemoveBookFromFavourites({ id: this.state.id, dataBaseId: this.state.dataBaseId }))
        }
    }

    render() {
        return (
            <div className="content-container">
                <Header />
                <div className="content-container_details">
                    <div className="card card_det">
                        <img src={this.state.thumbnail} />
                    </div>
                    <div className="content-container_buttons">
                        <button className="button"
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
                <div className="text" dangerouslySetInnerHTML={{ __html: this.state.description }} />

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