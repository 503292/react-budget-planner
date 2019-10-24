import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import * as actions from '../../redux/BudgetApp/actions';

const mapDispatchToProps = dispatch => ({
  onSave: input => dispatch(actions.setBudget(input)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
