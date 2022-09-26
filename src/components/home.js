import React from "react";
import Top from "./top";
import "../css/home.css"
import { Zoom } from "react-slideshow-image";
 import "react-slideshow-image/dist/styles.css";
 import resturant from "../assets/resturant.png"

import outside from "../assets/outside.jpg";
import logo from "../assets/logo.png";
import reception from "../assets/reception.jpg";
import { useNavigate } from "react-router-dom";

const images = [outside, logo, reception];

const zoomOutProperties = {
    duration: 2000,
    transitionDuration: 2000,
    infinite: true,
    indicators: true,
    scale: 0.7,
    arrows: true
  };

function Home(){

    let history= new useNavigate();

    const view = () =>{
        history('../view');
    }
   

    return(
        <div className="main">
           <Top/>
            <div className="home">
                <div className="hero containe slide-container">

                
                    <Zoom {...zoomOutProperties}>
                        {images.map((each, index) => (
                        <img key={index} style={{ width: "100%" ,height:"60vh",padding:"0"}} src={each} />
                        ))}
                    </Zoom>
                


                    {/* <div className="text">
                        <h1>Sleep like <span></span></h1>
                        <h1>The Queen or King<span></span></h1>
                        <h1>You are<span></span></h1>
                        
                    </div> */}

                </div>
                

            </div>


              

            <div className="hotel-info">
                <h1 className="title">Welcome to <span className="span">Sleep-In Palace</span> Hotel</h1>
                <div className="content">
                    <div className="left">
                        <p><button>view</button>ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="right">
                        <img src={outside} className="image"/>
                    </div>
                </div>
                
            </div>
            <div className="offering">
                <h1 className="title">Our <span className="span">Services</span></h1>
                 <div className="offers">
                    <div className="offer">
                        <img src={resturant} className="icons"/>
                        <h3>Resturants</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua.</p>
                    </div>

                    <div className="offer">
                        <img src={resturant} className="icons"/>
                        <h3>Resturants</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua.</p>
                    </div>

                    <div className="offer">
                        <img src={resturant} className="icons"/>
                        <h3>Resturants</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua.</p>
                    </div>

                    <div className="offer">
                        <img src={resturant} className="icons"/>
                        <h3>Resturants</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua.</p>
                    </div>
                    
                </div>   
            </div>
            <div className="passage">
                
            </div>

            <div className="roomSection">
                <h1 className="title">Our <span className="span">Rooms</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua.</p>
                <div className="rooms">
                    <div className="room">
                        <img src={outside}/>
                        <div className="info">
                            <h1>Room 1</h1>
                            <h1>R100</h1>
                        </div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, </span><br></br>
                        <button onClick={view}>view</button>
                    </div>
                    <div className="room">
                        <img src={outside}/>
                        <div className="info">
                            <h1>Room 1</h1>
                            <h1>R100</h1>
                        </div>
                        
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, </span><br></br>
                        <button>view</button>
                    </div>
                    <div className="room">
                        <img src={outside}/>
                        <div className="info">
                            <h1>Room 1</h1>
                            <h1>R100</h1>
                        </div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, </span><br></br>
                        <button>view</button>
                    </div>
                    
                </div>
            </div>
            <footer className="footer">

            </footer>
            
            

            

        
        </div>
    )
}
export default Home;