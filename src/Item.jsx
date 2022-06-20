export function Item({ item, apartament, setApartament, setActive, active }) {


  return (
    <>
      <button
        className='App__container__button'
        style={(active.length && (window.innerWidth > 1024)) ? {"width": "100%", height: "min-content"} : {}}
        onClick={() => {
          setApartament(!apartament);
          setActive(item.title);
          if(active.length !== 0) {
            setActive("")
          }
        }}
      >
        {(!active.length) ? item.title : "< Назад"}
      </button>
      {apartament && (
        <>
          {item.data.map(data => (
            <div className="App__appartments" key={Math.random()} style={(active.length && (window.innerWidth > 1024)) ? {height: "min-content", width: "800px"} : {}}>
              <div className="App__item">
                <div className="App__text">
                  <div className="App__text__text">
                    {data.text.map(text =>
                      <p key={Math.random()}
                      style={{"textIndent": "25px"}}>{text}</p>
                    )}
                  </div>
                </div>
                <>
                  {(data.buttons.length !== 0) && (data.buttons.map(button => (
                    <a key={Math.random()}
                        className="App__link" 
                        href={button.link}
                    >
                      <button className="App__buttonLink">
                        {button.title}
                      </button>
                    </a>
                  )))}
                </>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
