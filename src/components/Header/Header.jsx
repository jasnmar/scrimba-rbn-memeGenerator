import "./Header.css"
import { trollFace } from "../../assets/images"

export default function Header() {
  return (
    <header className="header">
    <img 
        src={trollFace} 
    />
    <h1>Meme Generator</h1>
</header>
  )
}

