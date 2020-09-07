import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import { searchBook } from '../actions/search';

class BookDashboardPage extends React.Component {
    constructor(props) {
        super(props);
    }
    onChange = (e) => {
        const query = e.target.value;
        this.props.dispatch(searchBook(query))
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Type book title"
                    autoFocus
                    onChange={this.onChange}
                />
                <BookList />
            </div>
        );
    }
}

export default connect()(BookDashboardPage);
