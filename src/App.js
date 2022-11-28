/*eslint-disable*/

import "./App.css";
import { useState } from "react";

function App() {
  // document.querySelectorAll('h4')[1].innerHTML=post; ->js는 이렇게 해야하지만 JSX는{}안에 바로입력가능

  let [글제목, 글제목변경] = useState(["여자 코트 추천", "강남 맛집 탐방", "기상 미션 시작"]);
  // let [logo, setLogo]=useState('ReactBlog');
  // 자주 변경될것 같은 html부분 위주로 state로 만들기
  let [좋아요개수, 좋아요변경함수] = useState(0);
  let [modal, setModal] = useState(false); //모달창의 상태 -문자,숫자,boolean 무관함!

  return (
    <div className="App">
      <div className="black-nav">
        <h4>BLOG made by React</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          글제목변경(copy.sort());
        }}
      >
        가나다순 정렬
      </button>

      <div className="list">
        {/* <h4>{글제목[0]}<span onClick={()=>{{좋아요개수}++}}> 💗</span> {좋아요개수} </h4> */}
        {/*  ↑안되는 이유 1. onClick={}안에 함수 들어가야함  2. state에서 값변경 시 등호 사용 불가*/}
        <h4 onClick={()=>{setModal(!modal /*modal의 상태를 반대로 바꿔줌*/)}}> 
          {글제목[0]}
          <span
            onClick={() => {
              좋아요변경함수(좋아요개수 + 1);
            }}
          >
            {" "}
            💗
          </span>{" "}
          {좋아요개수}{" "}
        </h4>
        <p>11월 15일 발행</p>

        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "송파 맛집 탐방";
            글제목변경(copy);
          }}
        >
          제목수정
        </button>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>11월 15일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>11월 15일 발행</p>
      </div>

      {
        modal === true ? <Modal/> : null //비어있는 html으로 null값 사용
      } 

    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};
// Component 컴포넌트 - 이렇게 축약한 HTML 덩어리
// 1. 반복적인 html축약
// 2. 큰페이지들
// 3. 자주 변경되는 UI등을 컴포넌트로 만들면 좋음

export default App;
