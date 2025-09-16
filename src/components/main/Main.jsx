import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/context";

export default function Main() {

  const { onSent, recentPrompt, showResult, loading, formattedResultData, setInput, input } = useContext(Context);



  return (
    <div className="main">
      <div className="nav">
        <p>Nova AI</p>
        <a href="https://shahe-aalam-ansari.netlify.app/"><img src={assets.nova} alt="User icon" /></a>

      </div>
      <div className="main-container">

        {
          !showResult ?
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
                <img src={assets.nova} alt="Gemini icon" />
                {loading ?
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                  :
                  <p dangerouslySetInnerHTML={{ __html: formattedResultData }}></p>
                }
              </div>
            </div>
        }



        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter your question"
              onKeyDown={(e) => {
                if (e.key === "Enter" && input.trim() !== "") {
                  onSent();
                }
              }}
            />

            <div>
              <img src={assets.mic} alt="Record a voice message" />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send}
                  alt="Send your prompt"
                />
              ) : null}
          </div>
        </div>
        <p className="bottom-info">
          Nova may display inaccurate information. Please double check.
        </p>
        <a href="https://github.com/shaheaalam244">Feel free to contribute, star or check other projects of Shahe Aalam</a>
      </div>
    </div>
    </div >
  )
}
