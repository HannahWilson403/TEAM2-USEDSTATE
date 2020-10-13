import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [age, setAge] = useState(19);
  const handleClick = () => setAge(age + 1)

  return (
    <div> 
      I am {age} Years Old 
      <div> 
        <button onClick={handleClick}>Increase my age! </button>
      </div>
    </div>
  )
}

export default App;
