import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const saveExpensesFilterHandler = (selectedExpenseYear) => {
    // console.log(selectedExpenseYear)
    setFilteredYear(selectedExpenseYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveExpensesFilter={saveExpensesFilterHandler}
        />
        <ExpenseItem {...props[0]} />
        <ExpenseItem {...props[1]} />
        <ExpenseItem {...props[2]} />
        <ExpenseItem {...props[3]} />
      </Card>
    </div>
  );
}

export default Expenses;
