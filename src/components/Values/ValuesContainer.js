import { connect } from 'react-redux';
import Values from './Values';
import {
  getBudget,
  countExpenses,
  countBalance,
} from '../../redux/Values/ValuesSelectors';

const mapStateToProps = state => ({
  budget: getBudget(state),
  expenses: countExpenses(state),
  balance: countBalance(state),
});

export default connect(mapStateToProps)(Values);
