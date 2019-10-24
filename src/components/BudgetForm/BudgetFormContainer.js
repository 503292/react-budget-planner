import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import * as budgetFormAction from './budgetFormAction';

const mapDispatchToProps = dispatch => ({
  onSave: input => dispatch(budgetFormAction.getBudget(input)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
