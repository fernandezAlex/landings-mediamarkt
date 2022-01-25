import React from 'react'

export const Quotes = ({ data }) => {
  return (
    <div className="section__">
      <div className="section__quotes">
        {data.map(({ title, text, textLink, link, img, imgPosition }) => {
          return <div className={`quotes ${imgPosition && "quotes--invert"}`}>
            <div className={`quotes__text ${imgPosition && "quotes__text--up"}`}>
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M16.7 20.5c3.2 0 6.4-3.5 7.7-8.2.7-2.5.7-5.1 0-7.3-.7-2.4-2.2-4.1-4.2-4.7-.5-.1-1-.2-1.5-.2-2.5 0-4.7 1.7-5.4 4.2-.8 3 .9 6.2 3.9 7 1.3.4 2.8.2 4-.4 0 .2-.1.3-.1.5-1.1 4-3.2 5.7-4.4 5.7h-.1c-.2 0-.4.1-.5.4l-.7 2.4c0 .1 0 .3.1.4.1.1.2.2.3.2.4-.1.7 0 .9 0zm-13.2 0c3.2 0 6.4-3.5 7.7-8.2.7-2.5.7-5.1 0-7.3C10.5 2.6 9 .9 7 .3 6.7.1 6.1 0 5.6 0 3.1 0 .9 1.7.2 4.2c-.8 3 .9 6.2 3.9 7 1.3.4 2.8.2 4-.4 0 .2-.1.3-.1.5-1.1 4-3.2 5.7-4.4 5.7h-.1c-.2 0-.4.1-.5.4l-.7 2.4c0 .1 0 .3.1.4.1.1.2.2.3.2.3 0 .6.1.8.1z"></path>
              </svg>
              <h3>
                {title}
              </h3>
              <p>
                {text}
              </p>
              {textLink && <a className="quotes__link" href={link}>
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path d="M15.78 11.28a.75.75 0 0 1 .22.53v.38a.77.77 0 0 1-.22.53l-5.14 5.13a.5.5 0 0 1-.71 0l-.71-.71a.49.49 0 0 1 0-.7L13.67 12 9.22 7.56a.5.5 0 0 1 0-.71l.71-.7a.5.5 0 0 1 .71 0z"></path>
                </svg>
                {textLink}
              </a>}
            </div>
            <div className="quotes__img">
              <img src={img} alt={title} />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
