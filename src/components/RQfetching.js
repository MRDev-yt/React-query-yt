import axios from 'axios';
import React from 'react';
import {useQuery} from 'react-query'

function RQfetching() {

     const fetchUsers = () => axios.get("https://jsonplaceholder.typicode.com/users")
     

                  //queries have unique key in rq
                  //usequery accepts a fn that return a promise
                  //cacheTime is used to maintain the cached data
                  //Stale time is used to store the stale data as fresh and prevent data refetching in background.
     const {data,isLoading,isError,error,isFetching}   =  useQuery("users",fetchUsers,{staleTime:10000});

     console.log(`isLoading ${isLoading}, isFetching ${isFetching}`);
           
            
  return <div>

      {isLoading && <h1> Loading...</h1>}

      {isError && <h1>{error.message}</h1>}
        
        {data?.data.map(user => (
            <div key={user.id}>
                {user.name}
                </div>
        )) }


  </div>;
}

export default RQfetching;
