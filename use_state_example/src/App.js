import React, {useState} from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(19);
  const handleClick = () => setAge(age + 1)
  const handleClick2 = () => setAge( age - 1 < 0 ? 0 : age - 1 )

  return (
    <div> 
      I am {age} Years Old 
      <div> 
        <button onClick={handleClick}>Increase my age! </button>
        <button onClick={handleClick2}>Decrease my age! </button>
      </div>
    </div>
  )
}

export default App;
