export function Item({ item, apartament, setApartament, setActive, active }) {


  return (
    <>
      <button
        className='App__container__button'
        style={(active.length && (window.innerWidth > 1024)) ? {"width": "300px", height: "min-content"} : {}}
        onClick={() => {
          setApartament(!apartament);
          setActive(item.title);
          if(active.length !== 0) {
            setActive("")
          }
        }}
      >
        {(!active.length && (window.innerWidth > 1024)) 
          && (
            <img className='App__container__button__img'
              src={(item.title === "Житло") ? "http://cdn.onlinewebfonts.com/svg/img_67240.png"
                : (item.title === "Гуманітарна допомога (продукти)") ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Food_Bank_icon.svg/2048px-Food_Bank_icon.svg.png"
                : (item.title === "Реєстрація") ? "http://cdn.onlinewebfonts.com/svg/img_180671.png"
                : (item.title === "Медична допомога") ? "https://www.iconpacks.net/icons/2/free-medicine-icon-3260-thumb.png"
                : (item.title === "Екстренні виклики") ? "https://www.seekpng.com/png/full/245-2453816_emergency-call-icon-png-emergency-call-icon-transparent.png"
                : (item.title === "Екскурсії та дозвілля") ? "https://www.svgrepo.com/show/82075/person-standing-on-top-of-a-mountain.svg"
                : (item.title === "Гуманітарна допомога (одяг)") ? "https://svgsilh.com/svg_v2/1976334.svg"
                : (item.title === "Освіта та навчання") ? "http://cdn.onlinewebfonts.com/svg/img_314828.png"
                : (item.title === "Інформація від Рівненського міськвиконкому") ? "https://svgsilh.com/svg_v2/25066.svg"
                : (item.title === "Поділитися інформацією для переселенців") ? "http://cdn.onlinewebfonts.com/svg/img_260366.png"
                : (item.title === "Робота") ? "https://www.svgrepo.com/show/146913/work-timetable.svg"
                : (item.title === "Психологічна допомога") ? "https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/psychology.png"
                : (item.title === "Укриття") ? "https://static.thenounproject.com/png/1725763-200.png"
                : (item.title === "Таксі") ? "http://cdn.onlinewebfonts.com/svg/img_355667.png"
                : "https://www.svgrepo.com/show/60114/infographic-elements.svg"
              }
              alt="icon"
            />
          )}
        {(!active.length) ? <div className={(window.innerWidth > 1024) && 'App__container__button__text'}>{item.title}</div> : <div style={{"font-size": "18px"}}>{"<< Назад"}</div>}
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
                <div style={{"width": "300px", "margin": "0 auto"}}>
                  {(data.buttons.length !== 0) && (data.buttons.map(button => (
                    <a key={Math.random()}
                        className="App__link" 
                        href={button.link}
                    >
                      <button 
                        className="App__buttonLink"
                      >
                        {button.title}
                      </button>
                    </a>
                  )))}
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
