import './App.css';
import {useState} from 'react';
import Item from './List/Item';
import dummyData from './data/dummyData';
// import navigations from './header/navigations';
import NavHead from './header/NavHead';


const App = () =>{

  const [color, setColor] = useState("red");

  const handleColor = (e) =>{
        setColor(e)
    
  }
  
  const appStyle = {
    backgroundColor:(color),
    transition: 'all 2s ease',
  }

  return (
    <div style={appStyle} className="App">

      <NavHead/>

      <div className="list">

      {dummyData.map((item)=>{
        return(
          <div key={item.id} className="item__list">
          <Item 
            price={item.price}
            id={item.color}
            name = {item.name}
            handleColor={handleColor}
            img = {item.img}/>
          </div>
        )
      })}

    </div>

      
    </div>
  );
}

export default App;
