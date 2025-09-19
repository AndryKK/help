export function Item({ item, apartament, setApartament, setActive, active }) {
  const getIconForItem = (title) => {
    const iconMap = {
      "Житло": "http://cdn.onlinewebfonts.com/svg/img_67240.png",
      "Гуманітарна допомога (продукти)": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Food_Bank_icon.svg/2048px-Food_Bank_icon.svg.png",
      "Реєстрація": "http://cdn.onlinewebfonts.com/svg/img_180671.png",
      "Медична допомога": "https://www.iconpacks.net/icons/2/free-medicine-icon-3260-thumb.png",
      "Екстренні виклики": "https://www.seekpng.com/png/full/245-2453816_emergency-call-icon-png-emergency-call-icon-transparent.png",
      "Екскурсії та дозвілля": "https://www.svgrepo.com/show/82075/person-standing-on-top-of-a-mountain.svg",
      "Гуманітарна допомога (одяг)": "https://svgsilh.com/svg_v2/1976334.svg",
      "Освіта та навчання": "http://cdn.onlinewebfonts.com/svg/img_314828.png",
      "Інформація від Рівненського міськвиконкому": "https://svgsilh.com/svg_v2/25066.svg",
      "Поділитися інформацією для переселенців": "http://cdn.onlinewebfonts.com/svg/img_260366.png",
      "Робота": "https://www.svgrepo.com/show/146913/work-timetable.svg",
      "Психологічна допомога": "https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/psychology.png",
      "Укриття": "https://static.thenounproject.com/png/1725763-200.png",
      "Таксі": "http://cdn.onlinewebfonts.com/svg/img_355667.png"
    };
    return iconMap[title] || "https://www.svgrepo.com/show/60114/infographic-elements.svg";
  };

  return (
    <>
      <button
        className='App__container__button fade-in'
        onClick={() => {
          setApartament(!apartament);
          setActive(item.title);
          if(active.length !== 0) {
            setActive("")
          }
        }}
      >
        {!active.length && (
          <img
            className='App__container__button__img'
            src={getIconForItem(item.title)}
            alt={`${item.title} icon`}
            loading="lazy"
          />
        )}
        <div className='App__container__button__text'>
          {!active.length ? item.title : "← Назад"}
        </div>
      </button>
      {apartament && (
        <div className="slide-up">
          {item.data.map((data, index) => (
            <div className="App__appartments" key={index}>
              <div className="App__text">
                <div className="App__text__text">
                  {data.text.map((text, textIndex) =>
                    <p key={textIndex}>{text}</p>
                  )}
                </div>
              </div>
              {data.buttons.length > 0 && (
                <div className="buttons-container">
                  {data.buttons.map((button, buttonIndex) => (
                    <a
                      key={buttonIndex}
                      href={button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="App__link"
                    >
                      <button className="App__buttonLink">
                        {button.title}
                      </button>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
