import { useState } from 'react';

export function Item({ item }) {
  const [apartament, setApartament] = useState(false);
  console.log(item.data);
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
                <div className="App__item"><text className="App__text">{data.text}</text>
                  <>
                    {(data.buttons.length !== 0) && (data.buttons.map(button => (
                      <a className="App__link" href={button.link}>
                        <button className="App__buttonLink">{button.title}</button>
                      </a>
                    )
                    ))}
                  </>
                </div>
              </div>
            </>
          )
          )}
        </>
      )}
    </>
  );
}
