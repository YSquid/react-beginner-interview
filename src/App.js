import { useState, useEffect, React } from "react";
import "./App.css";

function App() {
  const [randomUser, setRandomUser] = useState("");
  const [users, setUsers] = useState([]);
  let [userCount, setUserCount] = useState(0);

  const endpoint = "https://randomuser.me/api";
  const getRandomUser = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setRandomUser(data.results[0]);
  };


  useEffect(() => {
    getRandomUser();
  }, [userCount]);

  const getNewUser = () => {
    setUsers([...users, randomUser]);
    setUserCount((userCount += 1));
  };

  const getRandomUserName = () => {
    return `${randomUser.name.first} ${randomUser.name.last}`;
  };

  const getRandomUserImg = () => {
    return `${randomUser.picture.thumbnail}`;
  };
  console.log(users);
  return (
    <div className="App">
      <h1 data-testid='random-user-title'>Random User</h1>
      <p>{randomUser && getRandomUserName()}</p>
      <img src={randomUser && getRandomUserImg()} />
      <br />
      <button onClick={getNewUser}>Get New User</button>
      <h1 data-testid='users-title'>Users</h1>
      <div>
        {users.map((user) => {
          return (
            <>
            <p>{user.name.first} {user.name.last}</p>
            <img src={user.picture.thumbnail}/>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default App;

