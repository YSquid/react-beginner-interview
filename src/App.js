import { useState, useEffect, React } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState(null);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userImage, setUserImage] = useState("");
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const endpoint = "https://randomuser.me/api";

  // const getData = async () => {
  //   const response = await fetch(endpoint)
  //   let data = await response.json()
  //   //this returns an object, so if I want to show it on screen, turn it into a string with JSON stringify
  //   return JSON.stringify(data)
  // }

  // useEffect(() => {
  //   getData().then((response) => {
  //     setUserData(response)
  //   })
  // }, [])

  const getData = async () => {
    const resposne = await fetch(endpoint);
    let data = await resposne.json();
    return data;
  };

  const saveUser = () => {
    setUsers((users) => [...users, userData.results]);
  };


  useEffect(() => {
    const getUser = async () => {
      const user = await getData();
      const first = user["results"][0]["name"]["first"];
      const last = user["results"][0]["name"]["last"];
      const image = user["results"][0]["picture"]["medium"];
      setUserData(user);
      setUserFirstName(first);
      setUserLastName(last);
      setUserImage(image);
    };

    getUser();
  }, [users]);

  //this needs to be in my async
  //const firstName = userData['results'][0].name.first

  //console.log(firstName)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <h2>User data</h2>
      <p>{JSON.stringify(userData)}</p>
      <h3>User first name: {userFirstName} </h3>
      <h3>User last name: {userLastName}</h3>
      <img src={userImage} />
      <button onClick={saveUser}>Save User</button>
      <h3>Saved users actual</h3>
      <ul>
        {users.map((user, index) => {
          return (
          <li key={index}>
            <li>First Name: {user[0]['name']['first']}, Last Name: {user[0]['name']['last']}, Photo: <img src={user[0]['picture']['medium']} /></li>
          </li>
          
          )
        })}
      </ul>

    
    </div>
  );
}

export default App;
