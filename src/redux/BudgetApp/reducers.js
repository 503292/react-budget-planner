import { combineReducers } from 'redux';
import Type from './types';

const budgetFormReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.SET_BUDGET:
      return payload;

    default:
      return state;
  }
};

const expenseFormReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_EXPENSE:
      return [payload, ...state];

    default:
      return state;
  }
};

const rootReducers = combineReducers({
  budget: budgetFormReducer,
  expenses: expenseFormReducer,
});

export default rootReducers;
