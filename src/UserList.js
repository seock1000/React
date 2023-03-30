import React, { useEffect } from "react";

function User({user, onRemove, onToggle}) {
    // useEffect는 컴포넌트가 마운트 될 때 호출
    useEffect(() => {
        console.log("component is mounted");
        console.log(user);
        return () => {
            console.log("component is unmounted");
            console.log(user);
        }
        // [] : deps, 해당 부분에 특정 값 넣으면 해당 값이 바뀌기 직전에도 호출, [] 자체를 생략하면 컴포넌트가 리랜더링 될 때마다 호출
        // 리액트는 부모 요소가 리랜더링 되면 자식요소도 리랜더링, 유의할 것
    //}, [user]);
    });

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
                </b> 
                <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>Delete</button>
        </div>
    )
}

function UserList({users, onRemove, onToggle}) {
    
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
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    );
}

export default UserList;