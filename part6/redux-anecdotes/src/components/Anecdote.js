import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";

const Anecdote = ({ key, anecdote, handleClick }) => {
  return (
    <div key={key}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  );
};

const Anecdotes = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);

  return (
    <ul>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => dispatch(vote(anecdote.id))}
        />
      ))}
    </ul>
  );
};

export default Anecdotes
