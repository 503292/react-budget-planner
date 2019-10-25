export const Type = {
  ADD_BUDGET: 'ADD_BUDGET',
};

export const addBudget = budget => ({
  type: Type.ADD_BUDGET,
  payload: { budget },
});
