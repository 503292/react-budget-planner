import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import { getItemsFromState } from '../../redux/Expenses/expensesSelectors';
import { removeExpense } from '../../redux/Expenses/expensesActions';

const mapStateToProps = state => ({
  items: getItemsFromState(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
