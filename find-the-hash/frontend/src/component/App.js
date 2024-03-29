import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  
  const [ws, setWs] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const websocket = new WebSocket('ws://10.194.217.50:5000');

    websocket.onopen = () => {
      console.log('Connected to server');
      setWs(websocket);
    };

    websocket.onmessage = event => {
      setMessage(event.data);
    };

    return () => {
      if (ws) {
        ws.close();
        console.log('WebSocket connection closed');
      }
    };
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ws && inputValue.trim() !== '') {
      ws.send(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="Appdiv">
      <h1>Find the Hash</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='labeldiv'>
            Enter Nonce  :
            <input type="number" value={inputValue} onChange={handleChange}/>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
