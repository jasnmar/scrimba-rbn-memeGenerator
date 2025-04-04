import "./Main.css"
import { useEffect, useState } from "react"


export default function Main() {
  const [memeData, setMemeData] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageURL: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  }, [])


  function handleChange(e) {
    const {value, name} = e.currentTarget
    setMemeData(prevMemeData => {
      return {
        ...prevMemeData,
        [name]: value
      }
    })
  }

  function getNewImage(e) {
    e.preventDefault()
    console.log("button")
    const memeCount = allMemes.length
    const randomNumber = Math.floor(Math.random() * memeCount)
    const imageUrl = allMemes[randomNumber].url
    setMemeData(prevMemeData => {
      return {
        ...prevMemeData,
        imageURL: imageUrl
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
        <button onClick={getNewImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memeData.imageURL} />
        <span className="top">{memeData.topText}</span>
        <span className="bottom">{memeData.bottomText}</span>
      </div>
    </main>
  )
}
