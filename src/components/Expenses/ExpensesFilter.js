import classes from './ExpensesFilter.module.css';

function ExpensesFilter(props) {
  const dropDownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className={classes.expenses_filter}>
      <div className={classes.expenses_filter__control}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
