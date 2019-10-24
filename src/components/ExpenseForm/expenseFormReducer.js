import Type from '../../redux/type';

const expenseFormReducer = (state = '', { type, payload }) => {
  switch (type) {
    case Type.GET_EXPENSE:
      return payload;

    default:
      return state;
  }
};

export default expenseFormReducer;
