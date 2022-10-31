import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const Score = (props) => {
    const {score, end} = props;
    return (
        <div>
            <h4>{score}점</h4>
        </div>
    );
}

const Choice = (props) => {
    const {score, end, i, changeResponse} = props;
    let base = 5*i;
    const names = ["김현수", "김남준", "김서현", "김형겸", "나림", "류성경", "문서연", "박현지", "서지수", "송우영", "송하윤", "한예원", "유준상", "윤지영", "이서영", "장명지", "정재욱", "정현욱", "최유진", "최은형", "홍명헌", "서혜은", "홍서희", "이주함", "웹사랑해"];
    return (
        <div>
            <img src= {`${process.env.PUBLIC_URL}/photos/${i}.png`} alt = "웹 파트원들 사진"/>
            <button onClick={() => {changeResponse(0)}}>{names[base]}</button>
            <button onClick={() => {changeResponse(1)}}>{names[base + 1]}</button>
            <button onClick={() => {changeResponse(2)}}>{names[base + 2]}</button>
            <button onClick={() => {changeResponse(3)}}>{names[base + 3]}</button>
            <button onClick={() => {changeResponse(4)}}>{names[base + 4]}</button>
        </div>
    );
}

const Content = () => {
    const [score, setScore] = useState(0);
    const [end, setEnd] = useState(0);
    const [response, setResponse] = useState(-1);
    const [i, setI] = useState(0);
    const answer = [1, 3, 4, 0, 2];

    if (score === 5){
        setEnd(1);
    }
    useEffect (() => {
        if (answer[i] === response){
            setScore(score+1);
            setI(i + 1);
            if (score === 5){
                setEnd(1);
            }
        }    
    }, [response]);
    
    const changeResponse = (index) => {
        setResponse(index);
    };



    return (
        <div>
            <Score score = {score} end = {end}></Score>
            {end === 0 ? (<Choice score = {score} end = {end} i = {i} changeResponse = {changeResponse}></Choice>) : (<h4>끝</h4>)}
        </div>
    );
};

export default Content;