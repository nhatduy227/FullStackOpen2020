import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0]);
  const setNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const addVote = () => {
    const votesCopy = [...vote];
    votesCopy[selected] += 1;
    setVote(votesCopy);
  };
  const mostVoted = Object.keys(vote).reduce((a, b) =>
    vote[a] > vote[b] ? a : b
  );
  const mostVotedVotes = Object.values(vote).reduce((a, b) =>
    vote[a] > vote[b] ? a : b
  );

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        <p>{props.anecdotes[selected]}</p>
        <p>has {vote[selected]} votes</p>
      </div>
      <button onClick={addVote}>Vote</button>
      <button onClick={setNext}>Next anecdotes</button>
      <h1>Anecdote with the most votes</h1>
      <p>{props.anecdotes[mostVoted]}</p>
      <p>has {vote[mostVotedVotes]} votes</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
