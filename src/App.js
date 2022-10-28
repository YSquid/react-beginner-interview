import { useState, useEffect, React } from "react";
import "./App.css";

function App() {

  const [randomUser, setRandomUser] = useState(null)
  const [users, setUsers] = useState([])

  const endpoint = "https://randomuser.me/api";

  const getRandomUser = async () => {
    const response = await fetch(endpoint)
    console.log(response)
    const data = await response.json()
    console.log(data)
    setRandomUser(data)
  }

  const saveUser = () => {
    setUsers([...users, randomUser])
  }
  

  return (
    <div className="App">
      <button onClick={getRandomUser}>Get Random User</button>
      <h1>Random User</h1>
      <p>{JSON.stringify(randomUser)}</p>
      <button onClick={saveUser}>Save Random User</button>
    </div>
  );
}

export default App;
