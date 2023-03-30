// 리액트 컴포넌트 생성시 리액트를 불러오는 부분
import React from "react";

// 함수형 컴포넌트
// 컴포넌트 : 일종의 UI 조각, 쉽게 재사용
// 비구조화 할당 -> props 내부의 값을 먼저 명시
function Hello({name, color}) {
    // props로 추상화 해서 값을 받고 사용
    return <div style={{color}}>Hello {name}</div>
}

// defaultProps: props에 전달된 값이 없을 때 해당 값을 default로 
Hello.defaultProps = {
    name: 'no named',
    color: 'blue'
}

export default Hello;