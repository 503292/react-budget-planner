import { Type } from './expensesActions';

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_EXPENSE:
      return [...state, payload.expense];

    case Type.REMOVE_EXPENSE:
      return state.filter(item => item.id !== payload.id);

    default:
      return state;
  }
};

export default expensesReducer;
