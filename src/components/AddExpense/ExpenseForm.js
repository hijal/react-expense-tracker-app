import { useState } from 'react';

import classes from './ExpenseForm.module.css';

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const changeHandler = (e) => {
    if (e.target.type === 'text') {
      setEnteredTitle(e.target.value);
    }
    if (e.target.type === 'number') {
      setEnteredAmount(e.target.value);
    }
    if (e.target.type === 'date') {
      setEnteredDate(e.target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(data);
    props.onSaveExpenseData(data);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.new_expense__controls}>
        <div className={classes.new_expense__control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={enteredTitle}
            id="title"
            required
            onChange={changeHandler}
          />
        </div>
        <div className={classes.new_expense__control}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            id="amount"
            required
            onChange={changeHandler}
          />
        </div>
        <div className={classes.new_expense__control}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={enteredDate}
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            required
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className={classes.new_expense__actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
