import classes from './ExpenseDate.module.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  
  return (
    <div className={classes.expense_date}>
      <div className={classes.expense_date__month}>{month}</div>
      <div className={classes.expense_date__year}>{year}</div>
      <div className={classes.expense_date__day}>{day}</div>
    </div>
  );
}

export default ExpenseDate;
