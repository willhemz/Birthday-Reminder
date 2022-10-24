import React from 'react'

export const Birthday = ({people, handleClick}) => {
    return (
         <article className="birthday-part">
          {
            people.map(person => {
              const {id, img, name, age} = person
              return <>
                <div key={id} className="info">
                  <div className="image">
                    <img src={img} alt={name} />
                  </div>
                  <div className="details">
                    <h3>{name}</h3>
                    <p>{age}</p>
                  </div>
                </div>
              </>
            })
          }
          <button className="btn" onClick={() => handleClick()}>Clear All</button>
      </article>
    )
}