import React from "react";
import Anecdotes from "./components/Anecdote";
import CreateNew from "./components/CreateNew";

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes/>
      <h2>create new</h2>
      <CreateNew/>
    </div>
  );
};

export default App;
