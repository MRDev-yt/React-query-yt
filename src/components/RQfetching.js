import axios from 'axios';
import React from 'react';
import {useQuery} from 'react-query'

function RQfetching() {
                  //queries have unique key in rq
                  //usequery accepts a fn that return a promise
     const {data,isLoading}   =  useQuery("users",() => {
              return  axios.get("https://jsonplaceholder.typicode.com/users")
            })
            
  return <div>

      {isLoading && <h1> Loading...</h1>}
        
        {data?.data.map(user => (
            <div key={user.id}>
                {user.name}
                </div>
        )) }


  </div>;
}

export default RQfetching;
