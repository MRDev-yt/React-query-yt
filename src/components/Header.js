import React from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();

  return <div style={{ backgroundColor: "aqua", display: "flex" }}>

    <h1 onClick={() => history.push("/")}>
      Home
    </h1>
    <h1 onClick={() => history.push("/normal")}>
      Normal
    </h1>
    <h1 onClick={() => history.push("/rq")}>
      React query      </h1>
  </div>;
}

export default Header;
