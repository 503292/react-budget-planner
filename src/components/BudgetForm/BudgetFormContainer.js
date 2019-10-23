import { connect } from 'react-redux';
import * as budgetFormAction from './budgetFormAction';
import BudgetForm from './BudgetForm';

const mapDispatchToProps = dispatch => ({
  onSave: input => dispatch(budgetFormAction.getBudget(input)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
