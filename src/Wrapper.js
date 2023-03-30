import React from "react";

function Wrapper(props) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };

    return (
        <div style={style}>
            {/* props.children으로 Wrapper 컴포넌트 태그 내의 요소를 불러올 수 있음 */}
            {props.children}
        </div>
    )
}

export default Wrapper;