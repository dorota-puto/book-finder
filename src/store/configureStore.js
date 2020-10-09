import { createStore, combineReducers, applyMiddleware , compose} from 'redux';
import booksReducer from '../reducers/books';
import searchReducer from '../reducers/search';
import favouritesReducer from '../reducers/favourites'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      books: booksReducer,
      search: searchReducer,
      favourites: favouritesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
