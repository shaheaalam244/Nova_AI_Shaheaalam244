import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/context";

export default function Main() {

  const {onSent, recentPrompt, showResult, loading, formattedResultData, setInput, input} = useContext(Context);



  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user} alt="User icon" />
        </div>
        <div className="main-container">

          {
            !showResult?
            <>
          <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you?</p>
          </div>
          <div className="cards">
            <div onClick={() => onSent("Suggest beautiful places to see on an upcoming road trip.")} className="card">
              <p>Suggest beautiful places to see on an upcoming road trip. </p>
              <img src={assets.compass} alt="Compass icon" />
            </div>
            <div onClick={() => onSent("Briefly summarize this concept: Urban Planning")} className="card">
              <p>Briefly summarize this concept: Urban Planning </p>
              <img src={assets.lightbulb} alt="Compass icon" />
            </div>
            <div onClick={() => onSent("Brainstorm team bonding activities.")} className="card">
              <p>Brainstorm team bonding activities.</p>
              <img src={assets.messenger} alt="Compass icon" />
            </div>
            <div onClick={() => onSent("Improve readability of following code.")} className="card">
              <p>Improve readability of following code. </p>
              <img src={assets.code} alt="Compass icon" />
            </div>
          </div>
            </>
            : 
            <div className="result">
              <div className="result-title">
                <img src={assets.user} alt="User profile" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini} alt="Gemini icon" />
                {loading ?
                <div className="loader">
                <hr />
                <hr />
                <hr />
                </div>
                :
                <p dangerouslySetInnerHTML={{__html:formattedResultData}}></p>
                }
              </div>
            </div>
          }



          <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter your question" />
              <div>
                <img src={assets.gallery} alt="Search with a photo in your gallery" />
                <img src={assets.mic} alt="Record a voice message" />
                {input ? <img onClick={() => onSent()} src={assets.send} alt="Send your prompt" /> : null}
              </div>
            </div>
            <p className="bottom-info">
              Gemini may display inaccurate information. Please double check.
            </p>
          </div>
        </div>
    </div>
  )
}
