import { assets } from "../../assets/assets";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user} alt="User icon" />
        </div>
        <div className="main-container">
          <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest beautiful places to see on an upcoming road trip. </p>
              <img src={assets.compass} alt="Compass icon" />
            </div>
            <div className="card">
              <p>Brifly summarize this concept: Urban Planning </p>
              <img src={assets.lightbulb} alt="Compass icon" />
            </div>
            <div className="card">
              <p>Brainstorm team bonding activities.</p>
              <img src={assets.messenger} alt="Compass icon" />
            </div>
            <div className="card">
              <p>Improve readability of following code. </p>
              <img src={assets.code} alt="Compass icon" />
            </div>
          </div>
        </div>
    </div>
  )
}
