import {useState, useEffect, React} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [userData, setUserData] = useState([])

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const endpoint = 'https://randomuser.me/api'

  const getData = async () => {
    const response = await fetch(endpoint)
    const data = await response.json()
    setUserData(data)
  }

  
  console.log(userData)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}

export default App;
