import React, { useReducer } from "react";

// reducer : 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태로 반환해주는 함수
// 따라서, reducer에서 반환하는 상태는 컴포넌트가 지닐 새로운 상태가 됨
function reducer(state, action) {
    // 새로운 상태를 만드는 로직
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
        }
    }

function CounterReducer() {
    // useState : 동적인 값(state) 사용
    // state는 직접 수정 불가 => setNumber를 통해 수정
    //const [number, setNumber] = useState(0);
    
    // useReducer 선언
    const [number, dispatch] = useReducer(reducer, 0);

    // prevNumber가 함수형 최적화라는데 왜지..?
    // 이 코드가 왜 되는거지..?
    // 파라미터로 함수가 들어가는 것!, 파라미터로 함수가 들어가면 해당 함수에 인자로 이전 값을 전달
    // 즉, prevNumber => prevNumber + 1 자체가 함수 파라미터!
    const onIncrease = () => {
        dispatch({type:'INCREMENT'});
    }
    const onDecrease = () => {
        dispatch({type:'DECREMENT'});
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default CounterReducer;