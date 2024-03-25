import React, { useContext } from 'react'
import './Main.scss'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {
    const { prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput } = useContext(Context)
    return (
        <div className="main">
            <div className="nav">
                <p>Son</p>
                <img src={assets.User_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult ?
                    <>
                        <div className="greet">
                            <p>
                                <span>Hello, Dev.</span>
                            </p>
                            <p>How can i help you today</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggets veatufuls places to see</p>
                                <img src={assets.Compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Suggets veatufuls places to see</p>
                                <img src={assets.Messenger_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Suggets veatufuls places to see</p>
                                <img src={assets.Code_icon} alt="" />
                            </div>
                        </div></> :
                    <div className="results">
                        <div className="result-title">
                            <img src={assets.User_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.chat_gpt} alt="" width={'30px'} />
                            {loading ?
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }

                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here'
                            value={input}
                            onChange={(e) => setInput(e.target.value)} />
                        <div className="">
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className='bottom-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vero facilis, molestias eius nisi corporis est temporibus porro libero. Molestias obcaecati perspiciatis veritatis vel quisquam numquam porro enim perferendis optio!</p>
                </div>
            </div>
        </div>
    )
}

export default Main