/*eslint-disable*/

import "./App.css";
import { useState } from "react";

function App() {

  let [글제목, 글제목변경] = useState(["여자 코트 추천", "강남 맛집 탐방", "기상 미션 시작"]);
  let [좋아요개수, 좋아요변경함수] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [titleIndex, setTitleIndex] = useState(0)

  return (
    <div className="App">
      <div className="black-nav">
        <h4>BLOG made by React</h4>
      </div>

      {글제목.map((contents, i) => {
          return (
          <div className="list" key={i}>
          <h4 onClick={() => { setModal(!modal); setTitleIndex(i)}}>
          {contents}
          </h4>
          <span onClick={() => {
            let copy=[...좋아요개수];
            copy[i]++;
            좋아요변경함수(copy) }} >
            &nbsp;💗
          </span>
          &nbsp;{좋아요개수[i]}
          <p>11월 15일 발행</p>
        </div>
        );
        })}

{
  modal === true ? <Modal 글제목={글제목} 글제목변경={글제목변경} titleIndex={titleIndex}/> : null
}
    </div>
  );
}

const Modal = (props)=>{
  return(
    <div className="modal">
      <h4>{props.글제목[props.titleIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy=[...props.글제목];
        copy[0]='남자 코트 추천';
        props.글제목변경(copy)
      }}>글수정</button>
    </div>
  )
}

export default App;
