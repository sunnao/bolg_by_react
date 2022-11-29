/*eslint-disable*/

import "./App.css";
import { useState } from "react";

function App() {
  // document.querySelectorAll('h4')[1].innerHTML=post; ->js는 이렇게 해야하지만 JSX는{}안에 바로입력가능

  let [글제목, 글제목변경] = useState(["여자 코트 추천", "강남 맛집 탐방", "기상 미션 시작"]);
  // let [logo, setLogo]=useState('ReactBlog');
  // 자주 변경될것 같은 html부분 위주로 state로 만들기
  let [좋아요개수, 좋아요변경함수] = useState([0,0,0]); //(0)으로만 하면 좋아요개수 동일하게 일괄 변경됨
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

      {글제목.map((contents, i) => {
        return (
          <div className="list" key={i}>
            <h4 onClick={() => { setModal(!modal) }}>
              {글제목[i]}
              {/* map 파라미터인 content 도 가능 */}
            </h4>
            <span onClick={() => { 
              let copy=[...좋아요개수];
              copy[i] = copy[i] + 1
              좋아요변경함수(copy) }} >
              {' '+`💗`}
            </span>
            {/* array state자료 변경이므로 스프레드연산자 카피 */}
            {' '+ 좋아요개수[i]}
            <p>11월 15일 발행</p>
          </div>
        );
      })}

      {
        modal === true ? <Modal 글제목={글제목}/> : null //비어있는 html으로 null값 사용
      }
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
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
