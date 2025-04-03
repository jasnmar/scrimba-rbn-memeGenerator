import "./Main.css"
import { useState } from "react"


export default function Main() {
  const [memeData, setMemeData] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageURL: "http://i.imgflip.com/1bij.jpg"
  })

  function handleChange(e) {
    const {value, name} = e.currentTarget
    
    setMemeData(prevMemeData => {
      return {
        ...prevMemeData,
        [name]: value
      }
    })
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input 
            type="text" 
            placeholder="One does not simply" 
            name="topText" 
            onChange={handleChange}
            value={memeData.topText}
          />
        </label>

        <label>
          Bottom Text
          <input 
            type="text" 
            placeholder="Walk into Mordor" 
            name="bottomText" 
            onChange={handleChange}
            value={memeData.bottomText}
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memeData.imageURL} />
        <span className="top">{memeData.topText}</span>
        <span className="bottom">{memeData.bottomText}</span>
      </div>
    </main>
  )
}
