import Type from '../../redux/type';

export const getExpense = value => ({
  type: Type.GET_EXPENSE,
  payload: value,
});
