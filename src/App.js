import './App.css';
import {useState} from 'react';
import Item from './List/Item';
import dummyData from './data/dummyData';


const App = () =>{

  const [color, setColor] = useState("#FFFFF");

  const handleColor = (e) =>{
    setColor(e);
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

      {dummyData.map((item)=>{
        return(
          <>
          <Item key={item.id}
            price={item.price}
            id={item.color}
            name = {item.name}
            handleColor={handleColor}/>
          </>
        )
      })}

      
    </div>
  );
}

export default App;
