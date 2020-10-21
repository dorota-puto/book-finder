import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import Header from './Header'
import { searchBook } from '../actions/search';
import { startAddBook, startDeleteBooks } from '../actions/books';

// remove me: blabla

class BookDashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            message: props.message
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.message !== this.props.message) {
            this.setState({
                message: this.props.message
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
        this.props.dispatch(startDeleteBooks())

        if (this.props.query) {
            this.props.dispatch(startAddBook(this.props.query))
        }
        this.setState({
            text: ''
        });
    };

    render() {
        return (
            <div className="layout">
                <Header />
                <form className="form" onSubmit={this.onSubmit}>
                    <input className="form__input"
                        value={this.state.text}
                        type="text"
                        placeholder="Type book title..."
                        autoFocus
                        onChange={this.onChange}
                    />
                    {this.state.message && <p className="form__error">{this.state.message}</p>}
                </form>
                <BookList />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        query: state.search.query,
        books: state.books,
        message: state.search.message
    };
};

export default connect(mapStateToProps)(BookDashboardPage);
