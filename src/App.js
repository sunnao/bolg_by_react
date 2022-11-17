/*eslint-disable*/ 

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "성수 우동 맛집";
  // document.querySelectorAll('h4')[1].innerHTML=post; ->js는 이렇게 해야하지만 JSX는{}안에 바로입력가능

  let [글제목, 글제목변경] = useState(["여자 코트 추천", "강남 맛집 탐방", "기상 미션 시작"]);
  // let [logo, setLogo]=useState('ReactBlog');
  // 자주 변경될것 같은 html부분 위주로 state로 만들기
  let [좋아요개수, 좋아요변경함수] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>BLOG made by React</h4>
      </div>
      <button onClick={()=>{ 
        let copy=[...글제목];
        글제목변경(copy.sort()) }}>가나다순 정렬</button>
      <div className="list">
        {/* <h4>{글제목[2]}<span onClick={()=>{{좋아요}++}}> 💗</span> {좋아요} </h4> */}
        {/* 1. onClick={}안에 함수 들어가야함  2. state에서 값변경 시 등호 사용 불가*/}
        <h4>{ 글제목[0] }<span onClick={() => { 좋아요변경함수(좋아요개수+1) }}> 💗</span> {좋아요개수} </h4>
        <p>11월 15일 발행</p>
        <button onClick={()=>{
          let copy = [...글제목];
          copy[0]='송파 맛집 탐방';
          글제목변경(copy) }}>제목수정</button>
      </div>
			<div className="list">
        <h4>{글제목[1]}</h4>
        <p>11월 15일 발행</p>
      </div>
			<div className="list">
        <h4>{글제목[2]}</h4>
        <p>11월 15일 발행</p>
      </div>
    </div>
  );
}

export default App;
