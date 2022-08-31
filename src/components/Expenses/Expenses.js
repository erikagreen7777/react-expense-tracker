import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const saveExpensesFilterHandler = (selectedExpenseYear) => {
    setFilteredYear(selectedExpenseYear);
  };


  return (
    <div>
      <Card className="expenses">
        {/* Two way binding => controlled component 
        (the value and changes to value are handled in parent 
        component instead of the component itself */}
        <ExpensesFilter
          selected={filteredYear}
          onSaveExpensesFilter={saveExpensesFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
