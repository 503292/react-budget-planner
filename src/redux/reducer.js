import Type from './type';

export const reducer = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.INCREMENT:
      return state + payload;
    case Type.DECREMENT:
      return state - payload;
    default:
      return state;
  }
};
