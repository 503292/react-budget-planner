import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import * as expenseFormAction from './expenseFormAction';

const mapDispatchToProps = dispatch => ({
  onSave: input => dispatch(expenseFormAction.getExpense(input)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
