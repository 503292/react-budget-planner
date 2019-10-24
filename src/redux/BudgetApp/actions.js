import Type from './types';

export const setBudget = value => ({
  type: Type.SET_BUDGET,
  payload: value,
});

export const getExpense = value => ({
  type: Type.GET_EXPENSE,
  payload: value,
});
