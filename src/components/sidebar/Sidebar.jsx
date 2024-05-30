import "./Sidebar.css";
import {assets} from "../../assets/assets";
import { useState } from "react";

export default function Sidebar() {

  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar" >
      <div className="top">
        <img src={assets.menu} alt="Menu icon" className="menu" onClick={() => setExtended(prev => !prev)} />

        <div className={extended ? "new-chat extended" : "new-chat"}>
          <img src={assets.plus} alt="New chat icon" />
          {extended? <p>New Chat</p> : null }
        </div>
        {extended?  <div className="recent">
          <strong className="recent-title">Recent</strong>
          <div className="recent-entry">
            <img src={assets.messenger} alt="Message icon" />
            <p>What is react...</p>
          </div>
        </div> : null }
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry ">
          <img src={assets.question} alt="Question icon" />
          {extended? <p>Help</p> : null } 
        </div>
        <div className="bottom-item recent-entry ">
          <img src={assets.history} alt="History icon" />
          {extended? <p>History</p> : null }
        </div>
        <div className="bottom-item recent-entry ">
          <img src={assets.setting} alt="Setting icon" />
          {extended? <p>Settings</p> : null }
        </div>
      </div>
    </div>
  )
}
