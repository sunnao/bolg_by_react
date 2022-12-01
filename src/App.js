/*eslint-disable*/

import "./App.css";
import { useState } from "react";

function App() {

  let [title, setTitle] = useState(["여자 코트 추천", "강남 맛집 탐방", "기상 미션 시작"]);
  let [likes, setLikes] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [titleIndex, setTitleIndex] = useState(0)
  let [inputValue, setInputValue] = useState('');
  let [publishedDate, setPublishedDate] = useState(['2022년 11월 28일', '2022년 11월 22일', '2022년 11월 11일']);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>BLOG made by React</h4>
      </div>

      <div className='inputDiv'>
        <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value.trim()); }}/>
        <button onClick={()=>{
          let copyTitle=[...title];
          let copyLikes=[...likes];
          let copyPublishedDate=[...publishedDate];

          const year = new Date().getFullYear();
          const month = ('0' + (new Date().getMonth() + 1)).slice(-2);
          const day = ('0' + new Date().getDate()).slice(-2);
          const dateStr = `${year}년 ${month}월 ${day}일`;

          if(!inputValue){
            alert('제목을 입력해주세요')
            return false;
          }
          copyTitle.unshift(inputValue);
          copyLikes.unshift(0);
          copyPublishedDate.unshift(dateStr)
          setTitle(copyTitle);
          setLikes(copyLikes);
          setPublishedDate(copyPublishedDate);
          setInputValue('') }}>
            발행하기
        </button>
      </div>
      
      {
        title.map((contents, i) => {
          return (
            <div className="list" key={i}>
              <div>
                <h4 onClick={() => { setModal(!modal); setTitleIndex(i)}}>
                {contents}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy=[...likes];
                  copy[i]++;
                  setLikes(copy); }} >
                  &nbsp;💗
                </span>
                  &nbsp;{likes[i]}
                </h4>
                <p>{publishedDate[i]} 발행</p>
              </div>
              
              <button className="deleteBtn" onClick={()=>{
                let copy=[...title];
                copy.splice(i,1);
                setTitle(copy);
              }}>삭제</button>
            </div>
          )
        })
      }
      
      {
        modal === true ? <Modal title={title} setTitle={setTitle} titleIndex={titleIndex} publishedDate={publishedDate}/> : null
      }
    </div>
  );
}

const Modal = (props)=>{
  return(
    <div className="modal">
      <h4>{props.title[props.titleIndex]}</h4>
      <p>{props.publishedDate[props.titleIndex]}</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy=[...props.title];
        copy[0]='남자 코트 추천';
        props.setTitle(copy)
      }}>글수정</button>
    </div>
  )
}

export default App;
