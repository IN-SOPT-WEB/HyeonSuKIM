//Modal.js

import React from "react";
import styled from "styled-components";

const Modal = (props) => {

    const {onClose, correct} = props;


  return (
      <Background>
        <Content>
            {correct ? 
            <Box><h4>정답!</h4><p>함가브자이마리야</p><Btn onClick = {onClose}>닫기</Btn></Box>  : 
            <Box><h4>땡!</h4><p>뚁땽해</p><Btn onClick = {onClose}>닫기</Btn></Box>
            }
            
         </ Content>
      </Background>
  );
};

export default Modal;

//아래는 styled-components를 통한 스타일링

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  text-align: center;
`;

const Content = styled.div`
  height: 120px;
  width: 240px;
  margin-top: 70px;
  position: fixed;
  top: 100px;
  overflow: scroll;
  background: #ffaeae;

`;

const Box = styled.div`
    color: white;
    text-align: left;
    padding-top: 5px;
    padding-left: 10px;
    line-height: 10px;
    
`

const Btn = styled.button`
    background-color: #494949;
    color:white;
`