import { useState, useEffect, React } from "react";
import "./App.css";
import RandomUser from "./RandomUser";

function App() {

  return (
    <div className="App">
      <h1 data-testid='random-user-title'>Random User</h1>
      <RandomUser />
    </div>
  );
}

export default App;

