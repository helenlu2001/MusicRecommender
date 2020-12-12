import React, { Component } from "react";
import { Router } from "@reach/router";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import NavBar from "./modules/NavBar.js";
import LoginPage from "./pages/LoginPage.js"
import Home from "./pages/Home.js"

import JoinGroup from "./pages/JoinGroup.js"
import Room from "./pages/Room.js"
import "../utilities.css";
import "./App.css";

// import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
      loggedIn: false,
    };
  }

  // componentDidMount() {
  //   get("/api/whoami").then((user) => {
  //     if (user._id) {
  //       // they are registed in the database, and currently logged in.
  //       this.setState({ userId: user._id });
  //     }
  //   });
  // }

  // handleLogin = (res) => {
  //   console.log(`Logged in as ${res.profileObj.name}`);
  //   const userToken = res.tokenObj.id_token;
  //   post("/api/login", { token: userToken }).then((user) => {
  //     this.setState({ userId: user._id });
  //     post("/api/initsocket", { socketid: socket.id });
  //   });
  // };

  // handleLogout = () => {
  //   this.setState({ userId: undefined });
  //   post("/api/logout");
  // };

  render() {
    console.log("client id");
    console.log(process.env.SPOTIFY_ID);
    console.log("client secret");
    console.log(process.env.SPOTIFY_SECRET);
    return (
        <>
            <div className='App-container'>
              <Router>
                <LoginPage path="/" />
                <Home path='/home' />
                <JoinGroup path="/join" />
                <Room path="/:roomName" />
                <NotFound default />
              </Router>
            </div>

            
        </>

    

    )
    // console.log(this.state.loggedIn);
    // if(this.state.loggedIn) {
    //   console.log("logged in")
    //   return (
    //     <Router>
    //       <div>
    //       <Switch> 
    //         <JoinGroup exact path="/" />
    //         <Room exact path="/:roomName" />
    //         <NotFound default />
    //       </Switch>
    //       </div>
    //     </Router>
    //   )
    // }
    // else {
    //   console.log("got here")
    //   return (<LoginPage />)
    // }
  }
}

export default App;
