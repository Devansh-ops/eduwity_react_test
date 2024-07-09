import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    axios.get('/config.json')
      .then((response) => {
        setName(response.data.name);
      })
      .catch((error) => {
        console.error('Error fetching the config file', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello, {name}
        </p>
      </header>
    </div>
  );
}

export default App;
