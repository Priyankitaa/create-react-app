import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const locationOfExpenditure = 'Car'

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div>LocationOfExpenditure: {props.location}</div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
