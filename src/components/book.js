
import { useState, useEffect } from "react";


import { ref, uploadBytes } from 'firebase/storage';

import {v4} from "uuid"
import { collection, doc, query, where, addDoc,updateDoc, getDoc, getDocs,orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase"

const q=query(collection(db,'booking'),orderBy('people','desc'));
function Book (){
const [book, setBook] = useState([])
const [name, setName]= useState("");
const [surname, setSurname]= useState("");
const [people, setPeople] = useState("");
const [RoomType, setType] = useState("");
const [checkout, setCheckout] = useState("");
const [dates, setDates] = useState("");


useEffect(() => {
    onSnapshot(q,(snapshot)=>{
        setBook(snapshot.docs.map(doc=>({
          id: doc.id,
          item: doc.data()
        })))
   })
},[name]);
const BookRoom=(e)=>{
e.preventDefault();
 addDoc(collection(db,'booking'),{
   name:name,
   surname:surname,
   people:people,

  RoomType:RoomType,
  

  
 })

console.log('click')
setName('');
setSurname("");
setPeople("");
setType("");
setCheckout("")
};
console.log(book);
const [selected, setSelected] = useState("");
const selectionChangeHandler = (event) => {

setSelected(event.target.value)
};

    return(
        <div>
        <input type="text"className="txt" placeholder="Enter your name"value={name}
         onChange={e=>setName(e.target.value)} /><br></br>
         <input type="text" className="txt" placeholder="Enter your surname" value={surname}
         onChange={e=>setSurname(e.target.value)}/><br></br>
         <select defaultValue="" value={RoomType}
         onChange={e=>setType(e.target.value)}>
                <option hidden value="">Room Type</option>
                <option>suit</option>
                 <option>standard</option>
             </select>  <br></br>
                  
             <select defaultValue=""value={people}
         onChange={e=>setPeople(e.target.value)} >
                <option hidden value="">Number of people</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                </select>
        
              



        </div>


    )
}

export default Book;