import './App.scss';
import { Item } from './Item';
import fromServer from './fromServer.json'
import { useEffect, useState } from 'react';
// import { optionsfromServer } from './api';


function App() {
  const [items, setItems] = useState([]);
  const [itemsCopy, setItemsCopy] = useState([]);
  const [active, setActive] = useState("")
  const [apartament, setApartament] = useState(false);

  const getData = async () => {
    // const data = await optionsfromServer();
    const data = fromServer;
    setItems(data);
    setItemsCopy(data);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1050 && window.innerWidth > 900) {
        window.location.reload()
      }
    } 
    window.addEventListener('resize', handleResize)
  })

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
    <div className="App" style={(active.length > 0) ? (((window.innerWidth > 1024)) ? {width: "1024px"} : {}) : {}}>
      <h1>ДОРОЖНЯ КАРТА ПЕРЕСЕЛЕНЦЯ</h1>
      <h4>(м. Рівне, Рівненська область)</h4>
      {active.length === 0 && (
        <div>
          <span className="search__text">Пошук: </span>
          <input className="search__input" onChange={handleChange} type="text" />
        </div>
      )}
      <div
        className="App__container"
        style={(active.length) ? (((window.innerWidth > 1024)) ? {height: "min-content", width: "800px"} : {}) : {}}
      >
        {items.map( item =>
          (active.length === 0 || active === item.title)
          ? (
            <Item
              apartament={apartament}
              setApartament={setApartament}
              active={active}
              setActive={setActive}
              key={Math.random()}
              item={item}
            />
          )
          : null)
        }
      </div>
      <footer className='footer'>
      </footer>
    </div>
  );
}

export default App;
