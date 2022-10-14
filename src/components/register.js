import React from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from '../config/firebase';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';



function Register(){

    const [fullname,setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState("");
    const [user,setUser] = useState("");
    let history = new useNavigate();

    const register = ()=>{ 
        
        createUserWithEmailAndPassword(auth, email, password).then(async(userCredential)=>{

            const displayName = fullname;
            setUser(()=>({...userCredential.user}));

             updateProfile(auth.currentUser, {displayName:displayName}).then().catch();
            alert("successfull")
            history("/home")

    }).catch((error)=>{
        alert(error);
        console.log(error)
    })
    }

    return(
        <div className="login">
            <div className="form">
                <h1>Welcome</h1>
                <span>Are you looking for a place to sleep? comfortably?<br/> Look no further</span>
                <div className="control">
                    <label htmlFor="username"></label><br></br>
                    <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="control">
                    <label htmlFor="Email-Address"></label>
                    <input type="email" placeholder="Enter email address" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="control">
                    <label htmlFor="password"></label>
                    <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                
                <button onClick={register}>Register</button><br></br>
                <span>Already have an account?<Link to='../'>click here</Link> </span>
            </div>
        </div>
    )
}

export default Register;