import { useState, useEffect, React } from "react";
import "./App.css";

function App() {

  const [randomUser, setRandomUser] = useState('')
  const [users, setUsers] = useState([])
  const [userCount, setUserCount] = useState(0)

  const endpoint = "https://randomuser.me/api";

  useEffect(() => {
    const getRandomUser = async () => {
      const response = await fetch(endpoint)
      console.log(response)
      const data = await response.json()
      console.log(data.results)
      setRandomUser(data.results)
    }

    getRandomUser()
  }, [])
  

  const saveUser = () => {
    setUsers([...users, randomUser])
  }

  // const getRandomUserFullName = () => {
  //   return `First: ${randomUser[0].name.first} Last: ${randomUser[0].name.first}`
  // }
  

  return (
    <div className="App">
      <h1>Random User</h1>
      <p>{JSON.stringify(randomUser)}</p>
      {/* <p>{getRandomUserFullName()}</p> */}
      <button onClick={saveUser}>Save Random User</button>
    </div>
  );
}

export default App;
