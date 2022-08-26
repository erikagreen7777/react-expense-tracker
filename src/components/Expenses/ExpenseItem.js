// shift + option + f to document format
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//const ExpenseItem = (props) => {}
function ExpenseItem(props) {
  //0 = describes value, 1 = set<value> ALWAYS returns array with two elements
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
