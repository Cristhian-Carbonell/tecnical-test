import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login"
import Chat from "../Chat/Chat";

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}>
            <Route path="Chat" element={<Chat/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
