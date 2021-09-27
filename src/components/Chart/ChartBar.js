import classes from './ChartBar.module.css';

const ChartBar = (props) => {
  let barHeight = '0%';
  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <div className={classes.chart_bar}>
      <div className={classes.chart_bar__inner}>
        <div
          className={classes.chart_bar__fill}
          style={{ height: barHeight }}
        ></div>
      </div>
      <div className={classes.chart_bar__label}></div>
    </div>
  );
};

export default ChartBar;
