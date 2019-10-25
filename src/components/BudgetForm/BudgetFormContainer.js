import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import * as budgetActions from '../../redux/BudgetForm/budgetActions';

const mapDispatchToProps = dispatch => ({
  onSave: form => dispatch(budgetActions.addBudget(form)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
