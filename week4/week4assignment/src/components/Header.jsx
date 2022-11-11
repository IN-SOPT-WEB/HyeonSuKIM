import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components'; 

function Modal({ setModalOpen, array, deleteArray, navigate, showArray, userId = {userId}}) {
    
    const modalRef = useRef();
    useEffect(() => {
        document.addEventListener("mousedown", clickOutside);
        return () => {
            document.removeEventListener("mousedown", clickOutside);
          };
        });

        const clickOutside = (e) => {
            // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
            if (modalRef && !modalRef.current.contains(e.target)) {
              setModalOpen(false);
            }
            else {
                setModalOpen(true); 
            }
          };
      

    return (
        <>
        <div ref={modalRef}>
            {array.map((array, index) => (
               <SearchModal  key = {index} >
                <ModalText onClick = { () => { navigate(`/search/${array}`); setModalOpen(false); } }>{array}</ModalText>
                <ModalBtn onClick={ () => {setModalOpen(true); deleteArray(array);}}>X</ModalBtn>
               </SearchModal> 
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
    <BackGround>
    <Wrapper>
        <Head>
      <Title>Github Profile Finder</Title>
        <Input onKeyPress={entered} onClick={clicked} />
        </Head>

        <Body>
    
        <SearchHistory>
        {showArray && <Modal setModalOpen={setModalOpen} array = {array} deleteArray = {deleteArray} navigate = {navigate} showArray = {showArray} userId = {userId}/>}
        </SearchHistory>
        <Padding></Padding>
        <Blank></Blank>
        <Outlet />
        </Body>
    </Wrapper>
    </BackGround>
  )
}

const Wrapper = styled.div`
    text-align: center;
    width: 600px;
`;

const BackGround = styled.div`
    display: flex;
    justify-content: center;
    background-color: aliceblue;
    height: 100vh;
`
const Title = styled.h1`
    margin-top: 30px;
    padding-top: 20px;
    margin-bottom: 10px;
    color: white;
    background-color: #6ea2cf;
`
const Input = styled.input`
    background-color: #1a3349;
    color: #f2f7ff; 
    text-align: center;
    font-size: 20px;
    font-weight: 500;
`

const Head = styled.div`
    background-color: #6ea2cf;
`
const Body = styled.div`
    background-color: #6ea2cf;
`
const SearchHistory = styled.div`
    background-color: #6ea2cf;
    position: absolute;
    left: 50%;
    transform: translate(-50%);

`
const SearchModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 212px;
    border : 1px solid;
`

const Blank = styled.div`
    background-color: white;
    height: 20px;
`
const Padding = styled.div`
        background-color: #6ea2cf;
        height: 15px;

`
const ModalBtn = styled.button`
    border:none;
    background-color: #1a3349;
    color: aliceblue;
    padding: 0 10px;
    height: 28px;
    margin-right: 5px;

`
const ModalText = styled.p`
    margin-left: 10px;
    
`