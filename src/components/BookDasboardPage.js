import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import { searchBook } from '../actions/search';
import { startAddBook, deleteBooks } from '../actions/books';
class BookDashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            error: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.books !== this.props.books && this.props.books.length > 0) {
            this.setState({
                error: ''
            });
        } else if (prevProps.books !== this.props.books && this.props.books.length == 0) {
            this.setState({
                error: 'No books were found'
            });
        }
    }

    onChange = (e) => {
        const query = e.target.value;
        this.setState({
            text: `${query}`
        });
        this.props.dispatch(searchBook(query))
    };

    onSubmit = async (e) => {
        e.preventDefault();
        this.props.dispatch(deleteBooks())

        if (this.props.query) {
            this.props.dispatch(startAddBook(this.props.query))
        }
        this.setState({
            text: ''
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        value={this.state.text}
                        type="text"
                        placeholder="Type book title"
                        autoFocus
                        onChange={this.onChange}
                    />
                    {this.state.error && <p>{this.state.error}</p>}
                </form>
                <BookList />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        query: state.search.query,
        books: state.books
    };
};

export default connect(mapStateToProps)(BookDashboardPage);
