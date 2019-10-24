import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import budgetFormReducer from '../components/BudgetForm/budgetFormReducer';
import expenseFormReducer from '../components/ExpenseForm/expenseFormReducer';

const rootReducer = combineReducers({
  budget: budgetFormReducer,
  expenses: expenseFormReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
