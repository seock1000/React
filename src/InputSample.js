import React, {useState, useRef} from "react";

function InputSample() {
    // 여러 input값은 객체로 관리
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    // useRef: 특정 DOM을 직접 선택할 때 사용하는 hook
    const nameInput = useRef();

    const { name, nickname } = inputs; // 비구조화 할당을 통한 값 추출

    // e : 이벤트 객체, e.target은 이벤트가 발생한 DOM인 input DOM을 가리키게 됨
    const onChange = (e) => {
        const { value, name } = e.target; // 이벤트 객체에서 name과 value 추출
        setInputs({
            ...inputs, // ... : spread 연산자, 기존 객체나 배열을 건드리지 않고 사용, 값 복사에 유용
            [name]: value // name key를 가진 값을 value로 설정
        });
        // 객체를 새로 만드는 이유? 리액트에서 객체를 업데이트하게 될 때 기존 객체를 수정하면 안되고, 새로운 객체를 만들어야 함
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickaname: '',
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name" placeholder="Name" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="Nickname" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}
                {nickname && '(' + nickname + ')'}
            </div>
        </div>
    );
}

export default InputSample;