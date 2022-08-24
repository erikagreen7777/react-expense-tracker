import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card  from "./Card";

function Expenses(props) {
  return (
    <Card className ="expenses">
      <ExpenseItem {...props[0]} />
      <ExpenseItem {...props[1]} />
      <ExpenseItem {...props[2]} />
      <ExpenseItem {...props[3]} />
    </Card>
  );
}

export default Expenses;
