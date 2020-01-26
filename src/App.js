import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

import Joke from "./components/Joke/Joke";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Using Joke API</h2>
        <Joke />
      </div>
    </Provider>
  );
}

export default App;
