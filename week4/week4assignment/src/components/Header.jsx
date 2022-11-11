import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';


function Modal({ setModalOpen, array, deleteArray, navigate}) {
    
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };




    return (
        <>
        <div>
            {array.map((array, index) => (
               <div key = {index}>
                <button onClick={ () => {closeModal(); deleteArray(array);}}>X</button>
                <p onClick = { () => { navigate(`/search/${array}`); } }>{array}</p>
               </div> 
            ))}
            
        </div>
        </>
    );
}


export default function Header() {
    const [array, setArray] = useState([]);
    const [userId, setUserId] = useState("");
    const [showArray, setShowArray] = useState(false); 

    const navigate = useNavigate();

    // input 에서 엔터가 눌렷을 때 발생하는 이벤트
    const entered = (e) => {
    
        if (e.key === 'Enter'){
           navigate(`/search/${e.target.value}`);
           setUserId(e.target.value); 
           setArray(prevList => [...prevList, e.target.value]);
           setShowArray(false); 
        }
        
    }

    const clicked = (e) => {
      console.log(array);
      setShowArray(true); 
    }

    function setModalOpen (boolean) {
        setShowArray(boolean); 
    }

    const deleteArray = (userId) => {
        const newArray = array.filter((item) => item !== userId);
        setArray(newArray);
    };
    

    return (
    <div>
      <h1>Github Profile Finder</h1>
        <input onKeyPress={entered} onClick={clicked} />
        {showArray && <Modal setModalOpen={setModalOpen} array = {array} deleteArray = {deleteArray} navigate = {navigate}/>}
    </div>
  )
}
