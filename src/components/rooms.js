import React from "react";
import { useState,useEffect } from "react";
import Top from "./top";
import '../css/rooms.css'
import SliderProton from "./slideproton";
import image from '../assets/bedroom1.jpg';
import { getDocs , getDoc, collection, doc, addDoc} from "firebase/firestore";
import { db } from "../config/firebase";
import { async } from "@firebase/util";
import { type } from "@testing-library/user-event/dist/type";


function Booking(){

    const [items, setItems] = useState([]);
    
    const [price, setPrice] = useState('');
    const [types, setTypes] = useState('');


    const itemsref = collection(db,"addRoom");
    const refBooking = collection(db, "Booking")


    const getItems = async () =>{
        let data = await getDocs(itemsref);
        setItems(data.docs.map((doc)=>({...doc.data(),id: doc.id})))

    }
    items.map( item => {
        console.log(item);
    })
    const addBooking =async(obj) => {
        console.log(obj);

        await addDoc(refBooking,{price: obj.price,types: obj.types});

        alert("added");
        getItems();
    }

    useEffect(()=>{
    getItems();
    },[])

    return(
        <div className="booking">
            <Top/>
            <div className="top">
            <div className="booking">
                    
                    <div className="book">
                            <h1>Sleep comfortably</h1>
                            <h2>At an affordable price</h2>

                            <div className="content grid">
                                <div className="box">
                                    <span>CHECK-IN  </span> <br/>
                                    <input type="date" placeholder="28/05/2022" className="input"/>
                                </div>

                                <div className="box">
                                    <span>CHECK-OUT  </span> <br/>
                                    <input type="date" placeholder="29/05/2022" className="input"/>
                                </div>

                                <div className="box">
                                    <span>ADULTS</span> <br/>
                                    <input type="number" placeholder="01" className="input"/>
                                </div>

                                <div className="box">
                                    <span>CHILDREN </span> <br/>
                                    <input type="number" placeholder="01" className="input"/>
                                </div>

                                
                    </div>
                    <div className="price-tag">
                        
                            <h2 className="price">Price</h2>
                            <SliderProton/>  
                        
                    </div>
                    
                   
                      

                </div>     
                </div>
            </div>
            <div className="room-block">
                {/* <h2 className="the-rooms"> Range</h2> */}

                {items.map(item=> 
                    
                    <div className="book-rooms" key ={item.id}>
                        <div className="down">
                            <img src={image} className="the-image"/>
                            <div className="top-part">
                                <h3 >{item.price}</h3>
                                <h3>{item.types}</h3>
                                
                            </div>
                            <p>ex ea commodo consequat. Duis aute irure 
                                dolor in replla pariatur. Excepteur sint occaecat 
                                cupidatat non proident,</p>
                            <div className="buttons">
                                <button>view</button>
                                <button onClick={() => addBooking(item)}>Book Now</button>
                            </div>
                            
                        </div>

                        
                    </div>
            )}      
            </div>
        </div>
    )
}

export default Booking;