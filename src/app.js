import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addBook } from './actions/books';
import { searchBook } from './actions/search';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addBook({ id: '111', title: 'Ania z Zielonego Wzgórza', authors: 'Lucy Mound Montgomery' }));
store.dispatch(addBook({ id: '222', title: 'Clean Code', authors: 'Martin' }));

const state = store.getState();
console.log(state);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));