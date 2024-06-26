import React, { useState } from 'react'
import './Sidebar.scss'
import { assets } from '../../assets/assets'
const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.Menu} alt="" />
                <div className="new-chat">
                    <img src={assets.Plus} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.Messenger_icon} alt="" />
                        <p>What is react ...</p>
                    </div>
                </div> : null}

            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.Question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.History_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.Option_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>

            </div>
        </div>
    )
}

export default Sidebar