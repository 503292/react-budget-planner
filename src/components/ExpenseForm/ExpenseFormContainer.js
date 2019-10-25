import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import * as expensesActions from '../../redux/Expenses/expensesActions';

const mapDispatchToProps = dispatch => ({
  onSave: form => dispatch(expensesActions.addExpense(form)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
