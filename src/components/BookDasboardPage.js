import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import { searchBook } from '../actions/search';
import getResults from '../selectors/books'
import regeneratorRuntime from "regenerator-runtime";
import { addBook, deleteBooks } from '../actions/books';

class BookDashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
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
            try {
                const books = await getResults(this.props.query)
                console.log(books)
                books.forEach((book) => {
                    const info = book.volumeInfo
                    this.props.dispatch(addBook({ ...book, ...info }))
                }
                )
            } catch (error) {
                console.log('something was wrong')
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
                </form>
                <BookList />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        query: state.search.query
    };
};

export default connect(mapStateToProps)(BookDashboardPage);
