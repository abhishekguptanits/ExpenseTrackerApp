import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const hideForm = () => {
    setShowForm(false);
  }

  const showFormHandler = () => {
    setShowForm(true);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onHideForm={hideForm} onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
