import React from 'react';
import BookList from './BookList';

const BookDashboardPage = () => (
    <div>
        <input type="text" placeholder="Type book title"></input>
        <button>Search</button>
        <BookList />
    </div>
);

export default BookDashboardPage;
