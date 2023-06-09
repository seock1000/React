import { React, useRef, useMemo, useCallback, useReducer } from 'react';
//import Hello from './Hello';
//import Wrapper from './Wrapper';
//import Counter from './Counter';
//import InputSample from './InputSample';
import './App.css'; // css class는 import
import CreateUser from './CreateUser';
import UserList from './UserList';

/* // 컴포넌트 재사용
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
    
      <Wrapper //Wrapper 태그 안의 요소는 Wrapper 컴포넌트에서 랜더링 해줘야 화면에 출력
      >
        <Hello 
        // isSpecial: true는 자바스크립트 값이므로 중괄호 => isSpecial={true}
        // 값 설정을 안하면 true로 간주
        name='react' color='red' isSpecial/>
        <Hello color='pink'/>
        <Hello />
      </Wrapper>
      <div style={style}>{name}</div>
      <div className='gray-box'></div>
    </>
  );
} */


/* function App() {
  return (
    <Counter />
  );
} */

/* function App() {
  return (
    <InputSample />
  );
} */

function countActiveUsers(users) {
  console.log('counting active users...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
  {
      id: 1,
      username: 'seockcheon',
      email: 'test1@gmail.com',
      active: true
  },
  {
      id: 2,
      username: 'seockcheon1',
      email: 'test2@gmail.com',
      active: false
  },
  {
      id: 3,
      username: 'seockcheon2',
      email: 'test3@gmail.com',
      active: false
  }
]
};

function reducer(state, action) {
  switch(action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
          }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        // 배열도 객체와 마찬가지로 리액트에서는 변경 불허용 => 기존 배열을 복사하고 거기에 추가한 걸로 새로 만들어야함
        // 배열에 새 항목 추가시 두 가지 방법, spread(...) or concat function
        //setUsers([...users, user]);
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? {...user, active: !user.active } : user
          )
      };
    case 'REMOVE_USER':
      return {
        // user.id가 일치하지 않는 element만 추출해서 새로운 배열 생성 => 사실 삭제가 아니라 걔 빼고 새로 만드는 너낌..?
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // useRef 사용하여 id 관리
  const nextId = useRef(4);

  const { users } = state;
  const { username, email } = state.inputs;

  // useCallback : 함수들은 컴포넌트가 리랜더링 될 때마다 새로 만들어짐, useCallback을 사용하면 함수를 재사용 가능
  // deps 값이 바뀔 때만 함수를 새로 만듦
  // 최적화를 위해 사용
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, 
  []
  );

// 배열에 항목 추가 로직
const onCreate = useCallback(() => {
  dispatch({
    type: 'CREATE_USER',
    user: {
      id: nextId.current,
      username,
      email
    }
  });
  nextId.current += 1;
}, [username, email]);

const onRemove = useCallback(id => {
  dispatch({
    type: 'REMOVE_USER',
    id
  });
}, []);

const onToggle = useCallback(id => {
  dispatch({
    type: 'TOGGLE_USER',
    id
  });
}, []);

// useMemo
// 첫 번째 파라미터 : 연산 방식 정의하는 함수
// 두 번째 파라미터 : deps 배열 -> 배열 안의 내용이 바뀌면 등록한 함수를 호출해서 연산
const count = useMemo(() => countActiveUsers(users), [users]);

  return(
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList 
      users={users} 
      onToggle={onToggle}
      onRemove={onRemove}
      />
      <div>active user number : {count}</div>
    </>
  );
}

export default App;
