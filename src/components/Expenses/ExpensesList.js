import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import Card from "../UI/Card";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expense Found</h2>;
  }

  return (
    <li>
      <Card className="expenses-list">
        {props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title} // passing data into props in child comp
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </li>
  );
};

export default ExpensesList;
