import './App.css';
import react, {useState} from 'react';

const App = () =>{

  const [color, setColor] = useState("#FFFFF");

  const handleColor = (e) =>{
    setColor(e.target.id);
    // console.log(color)
  }
  const handleDefaultColor = (e) =>{
    setColor(e.target.id)
  }

  const appStyle = {
    backgroundColor:(color),
    transition: 'all 1s ease',
  }

  return (
    <div id="white" onMouseOver={handleDefaultColor} style={appStyle} className="App">
      
      <div id="yellow" onMouseOver={handleColor} className="boxes"></div>
      <div id="gray" onMouseOver={handleColor} className="boxes"></div>
      <div id="blue" onMouseOver={handleColor} className="boxes"></div>
      <div id="green" onMouseOver={handleColor} className="boxes"></div>
    </div>
  );
}

export default App;
