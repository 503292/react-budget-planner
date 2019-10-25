import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import ExpensesReducers from './Expenses/expensesReducers';
import budgetReducers from './BudgetForm/budgetReducers';

const rootReducer = combineReducers({
  expenses: ExpensesReducers,
  budget: budgetReducers,
});

const middleware = applyMiddleware(ReduxThunk, logger);

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
