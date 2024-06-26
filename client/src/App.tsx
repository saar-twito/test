import { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  const fetchUsers = async (e: any) => {
    e.preventDefault();
    const response = await fetch('https://test-ob3v.onrender.com/api/users');
    const body = await response.json();
    setUsers(body);
  }

  return (
    <div className="App">
      <h1>Welcome to MERN Stack</h1>

      <button onClick={(e) => fetchUsers(e)}>Send</button>

      <div>
        <ul>
          {users.map((user: any) => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
