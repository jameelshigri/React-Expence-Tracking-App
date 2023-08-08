import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expence.expanceDate}/>
      <div className="expense-item__description">
        <h2>{props.expence.expanceTitle}</h2>
        <div className="expense-item__price">
          ${props.expence.expanceAmount}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
