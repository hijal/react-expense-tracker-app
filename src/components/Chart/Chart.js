import ChartBar from './ChartBar';
import classes from './Chart.module.css';

const Chart = (props) => {
  const dataPointsMaxValue = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  let maxValue = Math.max(...dataPointsMaxValue);

  return (
    <div className={classes.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
