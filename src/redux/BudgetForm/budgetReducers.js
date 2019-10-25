import { Type } from './budgetActions';

const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.ADD_BUDGET:
      return payload.budget;

    default:
      return state;
  }
};

export default budgetReducer;
