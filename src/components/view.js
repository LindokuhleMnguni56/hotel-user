import React from "react";
import Top from "./top";
// import "../css/home.css"
import { Slide } from "react-slideshow-image";
 import "react-slideshow-image/dist/styles.css";
 import resturant from "../assets/resturant.png";
 import '../css/view.css'

import kitchen from "../assets/kitchen1.jpg";
import bedroom from "../assets/bedroom1.jpg";
import bathroom from "../assets/bathroom.jpg";
import { useNavigate } from "react-router-dom";

import { collection, addDoc } from "firebase/firestore";

const images = [kitchen, bedroom, bathroom];

const zoomOutProperties = {
    duration: 3000,
    transitionDuration: 5000,
    infinite: true,
    indicators: true,
    scale: 0.7,
    arrows: true
  };

function View(){

    let history= new useNavigate();
    const allRooms=() =>{
        history('../rooms');
    }
   

    return(
        <div className="main">
           <Top/>
            <div>
                <div className="slide-container">

                
                    <Slide {...zoomOutProperties}>
                        {images.map((each, index) => (
                        <img key={index} style={{ width: "100%" ,height:"50vh",padding:"0"}} src={each} />
                        ))}
                    </Slide>

                </div>

                
                <div className="info">
                <h1>Single Rooms Offering</h1>
                    <div className="amenities">
                        <div className="left">
                            <span>1000</span>
                            <ul>
                                <li>something hdfujhn ewhnf</li>
                                <li>somethingfewkopk ewfnkljn fewji</li>
                                <li>something fewioj</li>
                                <li>somethingewjijm efwni </li>
                                <li>somethingweo ewnjij enjwfi</li>
                                <li>something</li>
                            </ul>
                        </div>
                        <div className="right">
                            <img src={bedroom}/>
                        </div>
                    </div>
                <button className="button" onClick={allRooms}>View All Rooms</button>
                </div>

            </div>
           
        </div>
    )
 }
export default View;