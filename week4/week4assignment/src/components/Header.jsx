import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';


function Modal({ setModalOpen, array}) {
    
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
        //배열에서 해당 이름(arr)을 가진 요소 제거 
    };



    return (
        <>
        <div>
            {array.map((array, index) => (
               <div key = {index}>
                <button onClick={closeModal}>X</button>
                <p>{array}</p>
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

    
    

    return (
    <div>
      <h1>Github Profile Finder</h1>
        <input onKeyPress={entered} onClick={clicked} />
        {showArray && <Modal setModalOpen={setModalOpen} array = {array}/>}
    </div>
  )
}
