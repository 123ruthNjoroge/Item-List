import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('')
    }
  }

  return (
    <div className="app box">
      <h2>Dynamic List Manager</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter an item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target .value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div className="list-box">
        <ul>
          {items.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;