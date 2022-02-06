import axios from 'axios';
import React, { useEffect, useState } from 'react';

function NormalFetching() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = response.data;
    setUsers(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [])

  return <div>
    {loading && <h1>Loading....</h1>}

    {
      users.map(user => (
        <div key={user.id}>
          {user.name}
        </div>
      ))
    }
  </div>;
}
export default NormalFetching;
