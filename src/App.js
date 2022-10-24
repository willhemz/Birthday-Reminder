import React, {useState} from "react";
import { Birthday } from "./Birthday";
import {data} from './data'

function App() {
  const [people, setPeople] = useState(data)
  const [text, setText] = useState(`${data.length} birthdays today`)

  const handleClick = () => {
    setPeople([])
    setText(`0 birthday today`)
  }

  return <>
    <section className="container">
      <nav className="titleHolder">
        <p className="card-title">{text}</p>
      </nav>
      <Birthday people={people} handleClick={handleClick} />
    </section>
  </>
}

export default App;
