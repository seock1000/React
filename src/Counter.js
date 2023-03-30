import React, { useState } from "react";

function Counter() {
    // useState : 동적인 값(state) 사용
    // state는 직접 수정 불가 => setNumber를 통해 수정
    const [number, setNumber] = useState(0);

    // prevNumber가 함수형 최적화라는데 왜지..?
    // 이 코드가 왜 되는거지..?
    // 파라미터로 함수가 들어가는 것!, 파라미터로 함수가 들어가면 해당 함수에 인자로 이전 값을 전달
    // 즉, prevNumber => prevNumber + 1 자체가 함수 파라미터!
    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;