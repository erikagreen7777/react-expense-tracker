import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className ="expenses">
      <ExpenseItem {...props[0]} />
      <ExpenseItem {...props[1]} />
      <ExpenseItem {...props[2]} />
      <ExpenseItem {...props[3]} />
    </div>
  );
}

export default Expenses;
