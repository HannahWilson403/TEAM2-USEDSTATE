# TEAM2-USEDSTATE

Describe and implement a React Hook

An API for React called "Hooks" was implemented upon the initial release that allows a developer to
use state and lifecycle methods of React inside a functional component.
Hooks improve code reuse and composition. 
They allow for better defaults and sharing non
visual logic with the use of custom hooks.
They also have the flexibility of moving up and down the components tree.

UseState() is a react hook that allows developers to update, handle and change the state inside functional components without converting it to a class.

With the following snippet:

```
function App() {
  const [age, setAge] = useState(19);
  const handleClick = () => setAge(age + 1)

  return 
      <div> 
          I am {age} Years Old 
        <div> 
        <button onClick={handleClick}>Increase my age! </button>
      </div>
   </div>
}
```

The UseState() hook receives an initial state via an argument and then returns the variables in the array with array destructuring. The first variable in this array is the state and the second variable is the function used for updating the state.