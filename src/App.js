import { useState, useEffect, React } from "react";
import "./App.css";
import RandomUser from "./RandomUser";
import Users from './Users'

function App() {
  const [randomUser, setRandomUser] = useState("");
  const [users, setUsers] = ([]);
  return (
    <div className="App">
      <h1 data-testid='random-user-title'>Random User</h1>
      <RandomUser randomUser={randomUser} setRandomUser={setRandomUser} />
      <Users  users={users} setUsers={setUsers}/>
    </div>
  );
}

export default App;

