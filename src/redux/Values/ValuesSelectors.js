import { createSelector } from 'reselect';

export const getBudget = state => state.budget;

export const getExpenses = state => state.expenses;

export const countExpenses = createSelector(
  [getExpenses],
  expenses => expenses.reduce((total, item) => total + item.amount, 0),
);

export const countBalance = state => {
  const budget = getBudget(state);
  const expenses = countExpenses(state);

  return budget - expenses;
};
