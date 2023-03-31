import React from "react";

function CreateUser({username, email, onChange, onCreate}) {
    return (
        <div>
            <input
                name="username"
                placeholder="account"
                onChange={onChange}
                value={username}
                />
            <input
                name="email"
                placeholder="email"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>Register</button>
        </div>
    );
}

// React.memo 함수 : props가 바뀌지 않았다면 리랜더링 방지
export default React.memo(CreateUser);