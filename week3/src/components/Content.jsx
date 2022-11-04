import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import ModalPortal from '../Portal';

//Content 상단에서 현재 점수를 보여주는 컴포넌트 
const Score = (props) => {
    const {score} = props;
    return (
        <div>
            <Scr>{score}점</Scr>
        </div>
    );
}

//버튼을 화면에 출력함과 동시에 버튼의 클릭을 감지하고, '클릭한 버튼의 인덱스'를 'changeResponse 함수의 매개변수'로 전달함으로써 '부모 컴포넌트인 Content' 의 response state를 '클릭한 버튼의 인덱스'로 바꾸는 기능 
//base 의 값이 변화함에 따라 버튼명을 변경해 줌. 
//함수명 고민중.. 
const Choice = (props) => {
    const {i, changeResponse, modalOn, handleModal, correct} = props;
    let base = 5*i;
    const names = ["김현수", "김남준", "김서현", "김형겸", "나림", "류성경", "문서연", "박현지", "서지수", "송우영", "송하윤", "한예원", "유준상", "윤지영", "이서영", "장명지", "정재욱", "정현욱", "최유진", "최은형", "홍명헌", "서혜은", "홍서희", "이주함", "웹사랑해"];
    return (
        <Cnt>
            <Img src= {`${process.env.PUBLIC_URL}/photos/${i}.png`} alt = "웹 파트원들 사진"/>
            <ModalPortal>{modalOn && <Modal onClose={handleModal} correct = {correct}/>}</ModalPortal>
            <Subtitle>누구얒!</Subtitle>
            <Btn onClick={() => {changeResponse(0)}}>{names[base]}</Btn>
            <Btn onClick={() => {changeResponse(1)}}>{names[base + 1]}</Btn>
            <Btn onClick={() => {changeResponse(2)}}>{names[base + 2]}</Btn>
            <Btn onClick={() => {changeResponse(3)}}>{names[base + 3]}</Btn>
            <Btn onClick={() => {changeResponse(4)}}>{names[base + 4]}</Btn> {/* map 을 써서 줄일 수 있지 않을까 생각중입니다.. */}
        </Cnt>
    );
}

//다시하기 버튼을 출력함과 동시에 버튼의 클릭을 감지하고, 버튼 클릭 시, props 로 전달받은 reset 함수를 실행하는 컴포넌트
const Reset = (props) => {
    const {reset} = props;
    return (
        <Cnt>
            <ReBtn onClick={() => {reset()}}>다시하기</ReBtn>
        </Cnt>
    )
}

//컨텐츠들을 보여주는 메인 컴포넌트 
const Content = () => {
    const [score, setScore] = useState(0); //유저의 점수를 저장하는 state 
    const [end, setEnd] = useState(0); //게임의 종료 여부를 저장하는 state (1. 점수가 5점이 되거나 2. 다시하기 버튼을 누르면 게임이 종료된다.)
    const [response, setResponse] = useState(-1); //유저가 어떤 버튼을 클릭했는지 알 수 있게 클릭한 버튼의 인덱스를 저장하는 state 
    const [i, setI] = useState(0); // 버튼명을 바꾸기 위해 필요한 base 값을 업데이트할 때 필요한 state  
    const [correct, setCorrect] = useState(0);

    const [modalOn, setModalOn] = useState(false); // modal


    const handleModal = () => {
      setModalOn(false);
      if (correct === 1)
      { setScore(score+1);
      setI(i + 1);
      }
    };


    /* 그냥 우다다다 state 를 남발했는데요..! state 를 더 적게 쓸수록 좋은 것인지 궁금합니다! */

    const answer = [1, 3, 4, 0, 2]; //퀴즈의 정답을 저장하는 배열 

    //response 값이 업데이트되는 경우만 실행, 업데이트된 response (사용자가 클릭한 버튼의 인덱스)가 정답과 같으면 score 에는 1을 더하고, i의 값도 1 증가시킵니다. 만약 점수가 4점이라면, End 의 값을 1로 설정해 게임을 끝냅니다. (질문! 왜 5가 아니라 4를 써야할까요..??)
    useEffect (() => {
        if (answer[i] === response){

            setModalOn(true);
            setCorrect(1);
            if (score === 5){
                setEnd(1);
            }
        }
        else{
            if (response !== -1){
                setModalOn(true);
                setCorrect(0);
            }
         
        }
  
    }, [response]); // 여기서 뜨는 경고.. 무슨 말일까요..ㅎㅎ 
    

 

    
    const changeResponse = (index) => {
        setResponse(index);
    };

    const reset = () => {
        setI(0);
        setScore(0);
        setEnd(0);
    }

    


    return (
        <div>
            <Score score = {score} end = {end}></Score>
            {score < 5 ? (<Choice score = {score} end = {end} i = {i} changeResponse = {changeResponse} modalOn = {modalOn} handleModal = {handleModal} correct={correct} ></Choice>) : (<End>끝</End>)}
            <Reset reset = {reset}></Reset>
        </div>
    );
};

const Scr = styled.h4`
  text-align: center;
  background-color: #2b334b;
  color: white;
  padding: 10px;
  margin: 0;
  font-weight: 400;
`

const Cnt = styled.div`
    padding: 20px 0px;
    text-align: center;
    background-color: #474541;
`

const Img = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
`

const Subtitle = styled.h4`
    font-weight: 400;
    color: white;
`

const Btn = styled.button`
    background-color: #a09f9f;
    color: white;
    margin: 0px 2px;
    padding: 2px 7px;
`
const ReBtn = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #8a8a8a;
    color: white;
    font-size: larger;
`
const End = styled.h4`
    background-color: #474541;
    color: white;
    margin: 0px;
    text-align: center;
    height: 331px;
    line-height: 331px;
`
export default Content;