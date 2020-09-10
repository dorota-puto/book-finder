import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import { searchBook } from '../actions/search';
import getResults from '../selectors/books'
import { addBook, deleteBooks } from '../actions/books';

class BookDashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            error: ''
        };
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
            this.setState(() => ({ error: '' }));
            try {
                const books = await getResults(this.props.query)
                books.forEach((book) => {
                    this.props.dispatch(addBook({ ...book, ...book.volumeInfo, ...book.volumeInfo.imageLinks }))
                    console.log(this.props.books)
                }
                )
            } catch (err) {
                console.log('err='+err)
                this.setState({ error: 'No books were found' });
            }
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
