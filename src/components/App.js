import React from 'react';
import { Link } from 'react-router';

const App = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/playlist">Playlist</Link></li>
        </ul>
      </nav>
      {props.children}
    </div>
  )
}

export default App
