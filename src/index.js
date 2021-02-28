import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* root id 에 App 의 App 를 넣는거. kayel 를넣어도 작동함 */
/* 소스 파일을보면 그냥 빈 div id root 가 있음!. */
ReactDOM.render(<App />,document.getElementById('root'));

