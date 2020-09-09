import React from 'react';
import { connect } from 'react-redux';


class BookDetailsPage extends React.Component {

    onClick = () => window.open(this.props.book.previewLink, "_blank")

    render() {
        return (
            <div>
                <img src={this.props.book.thumbnail} />
                <h3>Title: {this.props.book.title}</h3>
                {this.props.book.subtitle && <p>Subtitle: {this.props.book.subtitle}</p>}
                {this.props.book.authors && <p>Authors: {this.props.book.authors}</p>}
                {this.props.book.publisher && <p>Publisher: {this.props.book.publisher}</p>}
                <p>{this.props.book.description}</p>
                <button onClick={this.onClick}>PREVIEW</button>
            </div>
        )
    }
};
const mapStateToProps = (state, props) => ({
    book: state.books.find((book) => book.id === props.match.params.id)
})
export default connect(mapStateToProps)(BookDetailsPage);