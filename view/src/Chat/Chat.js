import React from 'react';
import './Chat.css';

const Chat = (props) => {
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
                                                    <li className="new">
                                                        <span className="avatar available">
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" class="img-circle"/>
                                                        </span>
                                                        <div className="body">
                                                            <div className="header">
                                                                <span className="username">Gavin Free</span>
                                                                <small className="timestamp text-muted">
                                                                    <i className="fa fa-clock-o"></i>1 secs ago
                                                                </small>
                                                            </div>
                                                            <p>
                                                               Hey, have you finished up with the Ladybug project?
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="active">
                                                        <span className="avatar available">
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" className="img-circle"/>
                                                        </span>
                                                        <div className="body">
                                                            <div className="header">
                                                                <span className="username">Yanique Robinson</span>
                                                                <small className="timestamp text-muted">
                                                                    <i className="fa fa-clock-o"></i>3 secs ago
                                                                </small>
                                                            </div>
                                                            <p>
                                                                Cool. I'll see you guys then.
                                                            </p>
                                                        </div>
                                                    </li>  
                                                    <li>
                                                        <span className="avatar">
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" className="img-circle"/>
                                                        </span>
                                                        <div className="body">
                                                            <div className="header">
                                                                <span className="username">Ryan Haywood</span>
                                                                <small className="timestamp text-muted">
                                                                    <i className="fa fa-clock-o"></i>12 mins ago
                                                                </small>
                                                            </div>
                                                            <p>
                                                                Kevin, tomorrow is GoT night at my house. Bring your HDMI extension. Thanks.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="avatar busy">
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="avatar" className="img-circle"/>
                                                        </span>
                                                        <div className="body">
                                                            <div className="header">
                                                                <span className="username">Geoff Ramsey</span>
                                                                <small className="timestamp text-muted">
                                                                    <i className="fa fa-clock-o"></i>1 hour ago
                                                                </small>
                                                            </div>
                                                            <p>
                                                                Sales want to see you. Something about the new product.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="avatar">
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="avatar" className="img-circle"/>
                                                        </span>
                                                        <div className="body">
                                                            <div className="header">
                                                                <span className="username">Kara Mendly</span>
                                                                <small className="timestamp text-muted">
                                                                    <i className="fa fa-clock-o"></i>5 hours ago
                                                                </small>
                                                            </div>
                                                            <p>
                                                                Meeting next week Tuesday. Nothing serious, just bring teams work progress with you.
                                                            </p>
                                                        </div>
                                                    </li> 
                                                    <li>
                                                        <span className="avatar busy">
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" className="img-circle"/>
                                                        </span>
                                                        <div className="body">
                                                            <div className="header">
                                                                <span className="username">Jack Patillo</span>
                                                                <small className="timestamp text-muted">
                                                                    <i className="fa fa-clock-o"></i>12 mins ago
                                                                </small>
                                                            </div>
                                                            <p>
                                                                hey, what does this error mean?
                                                            </p>
                                                        </div>
                                                    </li>  
                                                </ul>
                                            </div>
                                            <div className="slimScrollBar" style={{width: "7px", position: "absolute", top: "0px", opacity: "0.4", display: "none", borderRadius: "7px", zIndex: "99", right: "1px", height: "478.639px", background: 'rgb(0, 0, 0)'}}></div><div class="slimScrollRail" style={{width: "7px", height: "100%", position: "absolute", top: "0px", display: "none", borderRadius: "7px", opacity: "0.2", zIndex: "90", right: "1px", background: 'rgb(51, 51, 51)'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="recipient-box"> 
                                        <select data-placeholder=" " className="form-control chzn-select chzn-done" multiple="" style={{display: "none"}}> 
                                            <option value="k.mckoy@ztapps.com">Kevin Mckoy</option>
                                            <option value="y.robinson@ztapps.com" selected="">Yanique Robinson</option>
                                            <option value="gavino@ztapps.com">Gavino Free</option> 
                                            <option value="ggeoff@ztapps.com">Geoff Ramsey</option>
                                            <option value="kkara@ztapps.com">Kara Kingsley</option>
                                            <option value="barbs@ztapps.com">Barbara Dundkleman</option> 
                                        </select>
                                    </div>
                                    <div>
                                        <div className="slimScrollDiv" style={{position: "relative", overflow: "hidden", width: "auto", height: "452px"}}>
                                            <div className="message-list-wrapper" style={{overflow: "auto", width: "auto", height: "452px"}}>
                                                <ul className="message-list">
                                                    <li className="text-center">
                                                        <a href="javascript:void(0);" className="btn btn-default">Load More Messages</a>
                                                    </li>
                                                    <li className="left">
                                                        <span className="username">Yanique Robinson</span>
                                                        <small className="timestamp">
                                                            <i className="fa fa-clock-o"></i>9 mins ago
                                                        </small> 
                                                        <span className="avatar available tooltips" data-toggle="tooltip " data-placement="right" data-original-title="Yanique Robinson">
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" className="img-circle"/>
                                                        </span>
                                                        <div className="body">   
                                                            <div className="message well well-sm">
                                                                Hey, are you busy at the moment?
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="right">
                                                        <span className="username">Kevin Mckoy</span>
                                                        <small className="timestamp">
                                                            <i className="fa fa-clock-o"></i>5 mins ago
                                                        </small> 
                                                        <span className="avatar tooltips" data-toggle="tooltip " data-placement="left" data-original-title="Kevin Mckoy">
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" className="img-circle"/>
                                                        </span>
                                                        <div className="body">   
                                                            <div className="message well well-sm">
                                                                Um, no actually. I've just wrapped up my last project for the day.
                                                            </div>
                                                            <div className="clearfix"></div>
                                                            <div className="message well well-sm">
                                                                Whats up?
                                                            </div>
                                                        </div>
                                                    </li>  
                                                    <li className="left">
                                                        <span className="username">Yanique Robinson</span>
                                                        <small className="timestamp">
                                                            <i className="fa fa-clock-o"></i>3 mins ago
                                                        </small> 
                                                        <span className="avatar available tooltips" data-toggle="tooltip " data-placement="right" data-original-title="Yanique Robinson">
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" className="img-circle"/>
                                                        </span>
                                                        <div className="body">   
                                                            <div className="message well well-sm">
                                                                Well, I wanted to find out if you have any plans for tonight.
                                                            </div>   
                                                            <div className="clearfix"></div>
                                                            <div className="message well well-sm">
                                                                <p><a href="#" className="white">Barbara</a> and I are going to this restaurant out of town.</p>
                                                                <img src="https://via.placeholder.com/300x200" alt=""/>
                                                            </div>
                                                        </div>
                                                    </li>  
                                                    <li className="right">
                                                        <span className="username">Kevin Mckoy</span>
                                                        <small className="timestamp">
                                                            <i className="fa fa-clock-o"></i>2 mins ago
                                                        </small> 
                                                        <span className="avatar tooltips" data-toggle="tooltip " data-placement="left" data-original-title="Kevin Mckoy">
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" className="img-circle"/>
                                                        </span>
                                                        <div className="body">   
                                                            <div className="message well well-sm">
                                                                Wow that sounds great.
                                                            </div>
                                                        </div>
                                                    </li> 
                                                    <li className="left">
                                                        <span className="username">Yanique Robinson</span>
                                                            <small className="timestamp">
                                                                <i className="fa fa-clock-o"></i>56 secs ago
                                                            </small> 
                                                        <span className="avatar available tooltips" data-toggle="tooltip " data-placement="right" data-original-title="Yanique Robinson">
                                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" className="img-circle"/>
                                                        </span>
                                                        <div className="body">   
                                                            <div className="message well well-sm">
                                                                Ok! We'll swing by your office at 5.
                                                            </div>
                                                        </div>
                                                    </li>  
                                                    <li className="right">
                                                        <span className="username">Kevin Mckoy</span>
                                                        <small className="timestamp">
                                                            <i className="fa fa-clock-o"></i>3 secs ago
                                                        </small> 
                                                        <span className="avatar tooltips" data-toggle="tooltip " data-placement="left" data-original-title="Kevin Mckoy">
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" className="img-circle"/>
                                                        </span>
                                                        <div className="body">   
                                                            <div className="message well well-sm">
                                                                Cool. I'l see you guys then.
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="slimScrollBar" style={{width: "7px", position: "absolute", top: "265px", opacity: "0.4", display: "none", borderRadius: "7px", zIndex: "99", right: "1px", height: "187.092px", background: 'rgb(0, 0, 0)'}}></div>
                                            <div className="slimScrollRail" style={{width: "7px", height: "100%", position: "absolute", top: "0px", display: "none", borderRadius: "7px", opacity: "0.2", zIndex: "90", right: "1px", background: 'rgb(51, 51, 51)'}}></div>
                                        </div>
                                        <div className="compose-box">
                                            <div className="row">
                                               <div className="col-xs-12 mg-btm-10">
                                                   <textarea id="btn-input" className="form-control input-sm" placeholder="Type your message here..."></textarea>
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
                                                    <button className="btn btn-green btn-sm pull-right">
                                                        <i className="fa fa-location-arrow"></i> Send
                                                    </button>
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
        </div>
    );
}

export default Chat;
