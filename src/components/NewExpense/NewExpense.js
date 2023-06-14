import React from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //This is how we pass data from child to parent ie from NewExpense to App.js. This onSaveNewExpense handler is build in App js file
    props.onSaveNewExpense(expenseData);
    //  console.log(expenseData);
  };

  return (
    <div className="new-expense">
      {/*  onSaveExpenseData = {saveExpenseDataHandler} is used to get data from child to parent ie from ExpenseForm.js to NewExpense.js */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
