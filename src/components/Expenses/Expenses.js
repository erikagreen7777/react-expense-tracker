import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

  const saveExpensesFilterHandler = (selectedExpenseYear) => {
    const expenseYear = selectedExpenseYear;
    // console.log("it's been passed up: " + selectedExpenseYear);
    props.onChangeYear(expenseYear);
  };

  return (
    <div>
      <ExpensesFilter onSaveExpensesFilter={saveExpensesFilterHandler} />
      <Card className="expenses">
        <ExpenseItem {...props[0]} />
        <ExpenseItem {...props[1]} />
        <ExpenseItem {...props[2]} />
        <ExpenseItem {...props[3]} />
      </Card>
    </div>
  );
}

export default Expenses;
