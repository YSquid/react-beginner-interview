import { useState, useEffect, React } from "react";
import "./App.css";
import RandomUser from "./RandomUser";

function App() {
  const [randomUser, setRandomUser] = useState("");
  return (
    <div className="App">
      <h1 data-testid='random-user-title'>Random User</h1>
      <RandomUser randomUser={randomUser} setRandomUser={setRandomUser} />
    </div>
  );
}

export default App;

