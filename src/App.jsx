import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const response = await axios.get('https://reqres.in/api/users?page=1')
    setUsers(response.data.data);
  }

  useEffect(() => {
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
