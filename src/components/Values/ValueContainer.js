import { connect } from 'react-redux';
import Values from './Values';
import {
  getBudget,
  getExpenses,
  getBalance,
} from '../../redux/BudgetApp/BudgetAppSelectors';

const mapStateToProp = state => ({
  budget: getBudget(state),
  expenses: getExpenses(state),
  balance: getBalance(state),
});

export default connect(mapStateToProp)(Values);
