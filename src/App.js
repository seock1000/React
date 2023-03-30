import React from 'react';
import Hello from './Hello';
import './App.css'; // css class는 import

// 컴포넌트 재사용
// <></> => Fragment : 브라우저 상에서 별도의 element로 나타나지 않는 요소, 하나 이상의 태그는 반드시 하나의 태그로 감싸져 있어야 하기 때문에 사용
function App() {
  // 변수는 {}로 감싸서 표현
  const name = 'react';
  // 인라인 스타일: 객체로 설정
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 기본 단위 아닐 경우 문자열로 설정
  }
  return (
    <>
      {/* JSX 내부 주석 */}
      {/* 중괄호로 감싸야 노출 x */}
      <Hello 
       // 열리는 태그 내부에선 이와 같이 주석 사용 가능
      />
      <Hello />
      <Hello />
      <div style={style}>{name}</div>
      <div className='gray-box'></div>
    </>
  );
}

export default App;
