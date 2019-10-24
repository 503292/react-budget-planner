import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import * as actions from '../../redux/BudgetApp/actions';

const mapDispatchToProps = dispatch => ({
  onSave: input => dispatch(actions.getExpense(input)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
