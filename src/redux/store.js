import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import budgetFormReducer from '../components/BudgetForm/budgetFormReducer';

const rootReducer = combineReducers({
  budget: budgetFormReducer,
  //   expenses: expensesReducers,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
