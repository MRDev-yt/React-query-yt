import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query'

function RQfetching() {

  const fetchUsers = () => axios.get("https://jsonplaceholder.typicode.com/users")


  //queries have unique key in rq
  //usequery accepts a fn that return a promise
  //cacheTime is used to maintain the cached data, default cache time = 5 minutes
  //Stale time is used to store the stale data as fresh and prevent data refetching in background. Default stale time = 0
  //Query will refetch automatically if the data is stale
  //refetchOnMount = always , fetches data everytime when the component mounts- refetchOnMount:{true}
  //refetchonWindowsFocus - automatically refetches when the data changes {refetchOnWindowFocus:true}
  //refetch interval allows you to refetch the data at a specified period of time -  {refetchInterval:2000}
  const { data, isLoading, isError, error, isFetching } = useQuery("users", fetchUsers, {refetchInterval:2000,refetchIntervalInBackground:true});


  console.log(`isLoading ${isLoading}, isFetching ${isFetching}`);


  return <div>

    {isLoading && <h1> Loading...</h1>}

    {isError && <h1>{error.message}</h1>}

    {data?.data.map(user => (
      <div key={user.id}>
        {user.name}
      </div>
    ))}


  </div>;
}

export default RQfetching;
