import React from "react";

function User({user, onRemove}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>Delete</button>
        </div>
    )
}

function UserList({users, onRemove}) {
    
/* 
    // 동적인 배열 rendering 불가능
    return(
        <div>
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
        </div> 
    )*/

    // map 활용하여 동적으로 배열 rendering => but key 사용하지 않아서 에러 발생
    // 리액트에서 배열을 rendering 할 때는 key라는 props를 설정해야 함
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default UserList;