import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	let post = '성수 우동 맛집';
	// document.querySelectorAll('h4')[1].innerHTML=post; ->js는 이렇게 해야하지만 JSX는{}안에 바로입력가능

	useState();

	return (
		<div className="App">
			<div className="black-nav">
				<h4>블로그입니다</h4>
			</div>
			<div className="list">
				<h4>{post}</h4>
				<p>11월 15일 발행</p>
			</div>
		</div>
	);
}

export default App;
