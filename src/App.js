//import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';


var born = false;
function App() {

  const [growth, setGrowth] = useState(0);
  const [nirvana, setNirvana] = useState(false);

  const growthHandler = () => {
    setGrowth(growth+10);
  }

  //empty error specifies that the component has mounted for the first time and it is born
  //this executes only one time when the component is born 
  useEffect(() => {
    console.log("I am born");
  },[])

  //it runs everytime, on initial mount and also whenever the component gets updated
  useEffect(() => {
    if(born)
      console.log("make mistakes and learn");
    else
      born = true;

    if(growth>70){
      setNirvana(true);
    }
  })

  //it runs when the nirvana is true 
  useEffect(() => {
    if(born){
      if(nirvana)
        document.title = "Nirvana attained"
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <h2> Use Effect </h2>
        <h3>Growth: {growth} </h3>
        <button onClick={growthHandler}> Learn and Grow </button>
      </header>
    </div>
  );
}

export default App;
