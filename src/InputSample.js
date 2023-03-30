import React, {useState} from "react";

function InputSample() {
    const [text, setText] = useState('');

    // e : 이벤트 객체, e.target은 이벤트가 발생한 DOM인 input DOM을 가리키게 됨
    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };

    return (
        <div>
            <input onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default InputSample;