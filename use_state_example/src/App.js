import React, {useState} from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(19);
  const handleClick = () => setAge(age + 1)
  const handleClick2 = () => setAge( age - 1 < 0 ? 0 : age - 1 )

  const [meters, setMeters] = useState(1);
  const handleclick3 = () => setMeters(meters + 10)

  return (
    <div> 
      I am {age} Years Old <br/>
      Meters = {meters}
      <div> 
        <button onMouseOver={handleClick}>Increase my age! </button>
        <button onClick={handleClick2}>Decrease my age! </button>
        
        <button onClick={handleclick3}>Increase my meters! </button>
      </div>
    </div>
  )
}

export default App;
