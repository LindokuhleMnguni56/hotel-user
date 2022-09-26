import React from "react";
import "../css/login.css"
import { useState } from "react";

import {Link} from 'react-router-dom';
import {auth} from '../config/firebase'
import {useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth';


function Login(){

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState("");
    
    let history = useNavigate();

    const login = (()=>{

        signInWithEmailAndPassword(auth, email, password).then(()=>{
            history("/home");
        }).catch((err)=>{

            console.log(err);
            alert(err)
        })
        
    })
    

        
    
    return(
        <div className="login">
            <div className="form">
                <h1>Welcome Back</h1>
                <span>Are you dreaming of a place to stay?<br></br> We are here</span>
                <div className="control">
                    <label htmlFor="Email-Address">Enter Email-Address</label><br></br>
                    <input type="email" placeholder="example@eg.com" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="control">
                    <label htmlFor="password" >Enter Password</label><br></br>
                    <input type="password" placeholder="*********" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button onClick={login}>Login</button><br></br>
                <span>Don't have an account? <Link to='../sign-up'>click here</Link></span>
            </div>
        </div>
    )
}

export default Login;