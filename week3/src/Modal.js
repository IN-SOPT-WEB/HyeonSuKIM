//Modal.js

import React from "react";
import styled from "styled-components";

const Modal = (props) => {

    const {onClose, correct} = props;


  return (
      <Background>
        <Content>
            {correct ? <p>참</p>  : <p>거짓</p>}
            <button onClick = {onClose}>닫기</button>
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
  top: 0;
  text-align: center;
`;

const Content = styled.div`
  height: 300px;
  width: 950px;
  margin-top: 70px;
  position: relative;
  overflow: scroll;
  background: #ffffff;
`;