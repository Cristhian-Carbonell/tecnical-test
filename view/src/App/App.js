import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login"
import Chat from "../Chat/Chat";

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/Chat" element={<Chat/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
