import { useState, useEffect, React } from "react";
import "./App.css";

function App() {

  const [randomUser, setRandomUser] = useState('')
  const [users, setUsers] = useState([])
  let [userCount, setUserCount] = useState(0)

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
  }, [userCount])
  

  const getNewUser = () => {
    setUsers([...users, randomUser])
    setUserCount(userCount += 1)
  }

  const getRandomUserName = () => {
    return `${randomUser[0].name.first} ${randomUser[0].name.last}`
  }

  const getRandomUserImg = () => {
    return `${randomUser[0].picture.thumbnail}`
  }

  return (
    <div className="App">
      <h1>Random User</h1>
      <p>{JSON.stringify(randomUser)}</p>
      <p>{randomUser && getRandomUserName()}</p>
      <img src={randomUser && getRandomUserImg()}/>
      <br />
      <button onClick={getNewUser}>Get New User</button>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => {
          <li key={index}></li>
        })}
      </ul>
    </div>
  );
}

export default App;
