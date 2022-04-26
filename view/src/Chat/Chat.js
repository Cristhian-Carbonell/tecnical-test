import React, { useState, useEffect }from 'react';
import './Chat.css';
import axios from 'axios';

const urluser = "http://localhost:3001/api/user"
const chatPost = "http://localhost:3001/api/chat"
const chatGet = "http://localhost:3001/api/chat"



const Chat = (props) => {
    const [user, setUser] = useState([]);
    const [chat, setChat] = useState({
        text: "",
      });
    const [text, setText] = useState([])

    const searchUser = async () => {
        await axios.get(urluser)
        .then(res => {
            const user = res.data;
            setUser({user})
        })
    }

    useEffect(() => {
        searchUser();
    }, [])

    const handleChange = (e) => {
        let newData = {...chat};
        newData[e.target.name] = e.target.value;
        setChat(newData)

    }

    const postChat = async (e) => {
        e.preventDefault();
        if (chat.text) {
            await axios.post(chatPost, {
                text: chat.text
            })
        }
        
        getChat()

    }

    const getChat = async () => {
        await axios.get(chatGet)
        .then(res => {
            const text = res.data
            setText(text)
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="panel panel-white border-top-green">
                        <div className="panel-body chat"> 
                            <div className="row chat-wrapper">  
                                <div className="col-md-4">
                                    <div className="compose-area"> 
                                        <a href="javascript:void(0);" className="btn btn-default"><i className="fa fa-edit"></i> New Chat</a>
                                    </div>
                                    <div>
                                        <div className="slimScrollDiv" style={{position: "relative", overflow: "hidden", width: "auto", height: "550px"}}>
                                            <div className="chat-list-wrapper" style={{overflowY: "auto", width: "auto", height: "550px"}}>
                                                <ul className="chat-list">
                                                {(user.user.user || []).map(user => 
                                                    <li className="new">
                                                        <span className="avatar available">
                                                            <img src={user.avatar} alt="avatar" class="img-circle"/>
                                                        </span>
                                                        <div className="body">
                                                            <div className="header">
                                                                <span className="username">{user.displayName}</span>
                                                                <small className="timestamp text-muted">
                                                                    <i className="fa fa-clock-o">{user.singupDate.substring(11,16)}</i>
                                                                </small>
                                                            </div>
                                                            <p>
                                                                {user.description}
                                                            </p>
                                                        </div>
                                                    </li>)}
                                                </ul>
                                            </div>
                                            <div className="slimScrollBar" style={{width: "7px", position: "absolute", top: "0px", opacity: "0.4", display: "none", borderRadius: "7px", zIndex: "99", right: "1px", height: "478.639px", background: 'rgb(0, 0, 0)'}}></div><div class="slimScrollRail" style={{width: "7px", height: "100%", position: "absolute", top: "0px", display: "none", borderRadius: "7px", opacity: "0.2", zIndex: "90", right: "1px", background: 'rgb(51, 51, 51)'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div>
                                        <div className="slimScrollDiv" style={{position: "relative", overflow: "hidden", width: "auto", height: "452px"}}>
                                            <div className="message-list-wrapper" style={{overflow: "auto", width: "auto", height: "452px"}}>
                                                <ul className="message-list">
                                                    <li className="text-center">
                                                        <a href="javascript:void(0);" className="btn btn-default">Load More Messages</a>
                                                    </li>
                                                    {(text.text || []).map(text =>
                                                        <li className="right">
                                                        <small className="timestamp">
                                                            <i className="fa fa-clock-o"></i>{text.date.substring(11,16)}
                                                        </small>
                                                        <div className="body">   
                                                            <div className="message well well-sm">
                                                                {text.text}
                                                            </div>
                                                        </div> 
                                                    </li>
                                                         )}
                                                </ul>
                                            </div>
                                            <div className="slimScrollBar" style={{width: "7px", position: "absolute", top: "265px", opacity: "0.4", display: "none", borderRadius: "7px", zIndex: "99", right: "1px", height: "187.092px", background: 'rgb(0, 0, 0)'}}></div>
                                            <div className="slimScrollRail" style={{width: "7px", height: "100%", position: "absolute", top: "0px", display: "none", borderRadius: "7px", opacity: "0.2", zIndex: "90", right: "1px", background: 'rgb(51, 51, 51)'}}></div>
                                        </div>
                                        <div className="compose-box">
                                            <div className="row" >
                                                <form onSubmit={(e) => {postChat(e)}} >
                                                    <div className="col-xs-12 mg-btm-10">
                                                       <textarea id="btn-input" className="form-control input-sm" placeholder="Type your message here..." name="text" onChange={handleChange} ></textarea>
                                                    </div>
                                                    <div className="col-xs-8">
                                                        <button className="btn btn-green btn-sm">
                                                            <i className="fa fa-camera"></i>
                                                        </button>
                                                        <button className="btn btn-green btn-sm">
                                                            <i className="fa fa-video-camera"></i>
                                                        </button>
                                                        <button className="btn btn-green btn-sm">
                                                            <i className="fa fa-file"></i>
                                                        </button>
                                                    </div>
                                                    <div className="col-xs-4"> 
                                                        <button className="btn btn-green btn-sm pull-right" >
                                                            <i className="fa fa-location-arrow"></i> Send
                                                        </button>
                                                    </div> 
                                                </form>
                                            </div> 
                                        </div>
                                    </div>
                                </div>                                    
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
