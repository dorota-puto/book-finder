import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase'
import { startSetFavourites } from './actions/favourites'

const store = configureStore();

const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(startSetFavourites()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});