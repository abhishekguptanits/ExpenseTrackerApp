// import React from 'react'
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Apparel",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Grocery Shopping",
    amount: 113,
    date: new Date(2023, 6, 13),
  },
  {
    id: "e6",
    title: "Dinner at a Restaurant",
    amount: 65.70,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e7",
    title: "Gasoline",
    amount: 40,
    date: new Date(2023, 3, 23),
  },
  {
    id: "e8",
    title: "Movie Tickets",
    amount: 25,
    date: new Date(2023, 5, 28),
  },
  {
    id: "e9",
    title: "Gym Membership",
    amount: 60,
    date: new Date(2018, 6, 2),
  },
  {
    id: "e10",
    title: "Books",
    amount: 20.50,
    date: new Date(2018, 11, 12),
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
