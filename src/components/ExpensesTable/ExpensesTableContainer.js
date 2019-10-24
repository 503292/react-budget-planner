import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
// import * as ExpensesTableAction from './ExpensesTableAction';
import { getAllExpenses } from '../../redux/BudgetApp/BudgetAppSelectors';

const mapStateToProp = state => ({
  items: getAllExpenses(state),
});

export default connect(mapStateToProp)(ExpensesTable);
