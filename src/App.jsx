import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const fetchUsers = async () => {
    const response = await axios.get('https://reqres.in/api/users?page=1')
  }

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
