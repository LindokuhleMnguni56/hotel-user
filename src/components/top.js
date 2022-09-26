import React from "react";
import '../css/top.css'
import logo from "../assets/logo.png";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Top(){
   
    return(
        <div className="container">
            <img src={logo} className="logo"/>

            <div className="list">
                <li className="forHome"><Link to="../home" className="path">Home</Link></li>
                <li className="forHome"><Link to="../rooms" className="path">Rooms</Link></li>
                <li className=""><Link to="../rooms" className="path">History</Link></li>
                

            </div>

        </div>
    )
}

export default Top;