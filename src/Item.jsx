import { useState } from 'react';

export function Item({ item }) {
  const [apartament, setApartament] = useState(false);

  return (
    <>
      <button
        className='App__container__button'
        onClick={() => setApartament(!apartament)}
      >
        {item.title}
      </button>
      {apartament && (
        <>
          {item.data.map(data => (
            <>
              <div className="App__appartments">
                <div className="App__item">
                  <text className="App__text">
                    <div className="App__text__text">
                      {data.text.map(text => <p key={Math.random()} style={{"textIndent": "25px"}}>{text}</p>)}
                    </div>
                  </text>
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
            </>
          ))}
        </>
      )}
    </>
  );
}
