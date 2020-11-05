import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        {props.value} {props.sign}
      </td>
    </tr>
  );
};
const Statistics = (props) => {
  if (props.all === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <Statistic text="Good" value={props.good} />
        <Statistic text="Neutral" value={props.neutral} />
        <Statistic text="Bad" value={props.bad} />
        <Statistic text="All" value={props.all} />
        <Statistic text="Average" value={props.average} />
        <Statistic text="Positive" value={props.positive} sign={"%"} />
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let all = good + bad + neutral;
  let average = (good - bad) / all;
  let positive = (good / all) * 100;

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <h1>Statistic</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
