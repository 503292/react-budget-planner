import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import * as actions from '../../redux/storeChanges/actions';
import { getAllExpenses } from '../../redux/storeChanges/selects';

const mapStateToProp = state => ({
  items: getAllExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(actions.deleteExpense(id)),
});

export default connect(
  mapStateToProp,
  mapDispatchToProps,
)(ExpensesTable);
