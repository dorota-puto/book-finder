import { createStore, combineReducers } from 'redux';
import booksReducer from '../reducers/books';
import searchReducer from '../reducers/search';

export default () => {
  const store = createStore(
    combineReducers({
      books: booksReducer,
      search: searchReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
