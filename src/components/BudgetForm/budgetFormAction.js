import Type from '../../redux/type';

export const getBudget = value => ({
  type: Type.GET_BUDGET,
  payload: value,
});
