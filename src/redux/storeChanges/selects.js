export const getBudget = state => state.budget;

export const getExpenses = state =>
  state.expenses.reduce((acc, expense) => acc + expense.amount, 0);
export const getBalance = state => getBudget(state) - getExpenses(state);

export const getAllExpenses = state => state.expenses;
