import Type from './type';

export const increment = value => ({
  type: Type.INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: Type.DECREMENT,
  payload: value,
});
