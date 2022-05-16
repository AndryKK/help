import './App.scss';
import { Item } from './Item';
import fromServer from './fromServer.json'
import { useEffect, useState } from 'react';
// import { optionsfromServer } from './api';


function App() {
  const [items, setItems] = useState([]);
  const [itemsCopy, setItemsCopy] = useState([]);

  const getData = async () => {
    // const data = await optionsfromServer();
    const data = fromServer;
    setItems(data);
    setItemsCopy(data);
  }

 useEffect(()=> {
  getData();
  }, [])

 useEffect(()=> {
  }, [items])

  const handleChange =(e)=> {
    const filteredItems = itemsCopy.filter(i => i.data.some(topic => topic.text.join(" ").toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) === true));
    setItems(filteredItems)
  }
  
  

  return (
    <div className="App">
      <h1>ДОРОЖНЯ КАРТА ПЕРЕСЕЛЕНЦЯ</h1>
      <h4>(м. Рівне, Рівненська область)</h4>
      <span>Пошук: </span>
      <input onChange={handleChange} type="text" />
      <div className="App__container">
        {items.map( item => (
          <Item
           key={Math.random()}
           item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
