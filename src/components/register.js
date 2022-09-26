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
                <h1>You are most Welcome</h1>
                <span>Are you dreaming of a place to stay?<br></br> We are here</span>
                <div className="control">
                    <label htmlFor="username">Username</label><br></br>
                    <input type="text" placeholder="Hammy" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="control">
                    <label htmlFor="Email-Address">Enter Email-Address</label><br></br>
                    <input type="email" placeholder="example@eg.com" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="control">
                    <label htmlFor="password">Enter Password</label><br></br>
                    <input type="password" placeholder="*********" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                
                <button onClick={register}>Login</button><br></br>
                <span>Already have an account?<Link to='../'>click here</Link> </span>
            </div>
        </div>
    )
}

export default Register;