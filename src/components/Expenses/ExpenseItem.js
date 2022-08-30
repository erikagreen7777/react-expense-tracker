// shift + option + f to document format
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//const ExpenseItem = (props) => {}
function ExpenseItem(props) {
  //0 = describes value, 1 = set<value> ALWAYS returns array with two elements
  // const [title, setTitle] = useState(props.title);

  //dumb or presentational components - not managing state
  // smart or stateful components - manages state

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
