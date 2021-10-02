import React from "react";
import Board from "./Board";
import Write from "./Write"
import Edit from "./Edit"
import {Route} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Route path="/" exact component={Board}>
        <Board />
      </Route>

      <Route path="/write" exact component={Write}>
        <Write />
      </Route>

      <Route path="/edit/:index">
        <Edit />
      </Route>
    </div>
  );
}

export default App;