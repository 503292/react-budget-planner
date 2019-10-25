import React from 'react';
import styled from 'styled-components';
import BudgetForm from './BudgetForm/BudgetFormContainer';
import ExpenseForm from './ExpenseForm/ExpenseFormContainer';
import ExpensesTable from './ExpenseTable/ExpensesTableContainer';
import Values from './Values/ValuesContainer';

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  width: 1000px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  return (
    <Container>
      <BudgetForm />
      <Values />
      <ExpenseForm />
      <ExpensesTable />
    </Container>
  );
};

export default App;
