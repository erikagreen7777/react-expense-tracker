import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const [expensesObject, setExpensesObject] = useState(props.items);

  const saveExpensesObjectHandler = (
    filteredExpensesObject,
    selectedExpenseYear
  ) => {
    setExpensesObject(
      filteredExpensesObject.filter(
        (x) => x.date.getFullYear() === parseInt(selectedExpenseYear)
      )
    );
  };

  const saveExpensesFilterHandler = (selectedExpenseYear) => {
    setFilteredYear(selectedExpenseYear);
    saveExpensesObjectHandler(props.items, selectedExpenseYear);
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

        {expensesObject.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
