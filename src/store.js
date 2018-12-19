import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import RootReducer from '../src/Reducers/RootReducer';

const middleware = applyMiddleware(thunk);

const Store = createStore(
   RootReducer,
   composeWithDevTools(middleware),
)

Store.subscribe(throttle(() => {


}, 1000));

export default Store;