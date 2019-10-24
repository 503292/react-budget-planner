import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loger from './middleware/loger';
import rootReducers from './BudgetApp/reducers';

const enhancer = applyMiddleware(loger);

const store = createStore(rootReducers, composeWithDevTools(enhancer));

export default store;
