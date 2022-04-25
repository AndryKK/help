import './App.scss';
import { Item } from './Item';
import fromServer from './fromServer.json'
import { useEffect, useState } from 'react';
import { optionsfromServer } from './api';


function App() {
  const [items, setItems] = useState([]);

  const getData = async () => {
    // const data = await optionsfromServer();
    const data = fromServer;
    setItems(data);
  }

 useEffect(()=> {
  getData();
  }, [])
  
  

  return (
    <div className="App">
      <h1>ДОРОЖНЯ КАРТА ПЕРЕСЕЛЕНЦЯ</h1>
      <div className="App__container">
        {items.map( item => (
          <Item item={item}/>
        ))}
      </div>
    </div>
  );
}

export default App;
