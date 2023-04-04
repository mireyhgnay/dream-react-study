# <div align="center">👩🏻‍💻 React : Hook(훅) - useReducer</div>

<br>

# ✨ useReducer

**복잡한 상태관리를 해야할 때 사용한다**

### 📁 person-rducer.js
- 컴포넌트가 아니기 때문에 일반 js파일로 생성함
- 공통적으로 사용하고 있는 부분들을 좀 더 편리하게 관리하기 위해 리듀서를 사용
- 코드의 로직이 재사용이 가능하다는 장점이 있다.

```jsx
export default function personReducer(person, action) {
    switch (action.type) {
        case 'updated' : {
            const { prev, current } = action;
            return {
                ...person,
                mentors: person.mentors.map((mentor) => {
                    if (mentor.name === prev) {
                        return { ...mentor, name: current };
                    }
                    return mentor;
                }),
            };
        }
        case 'added' : {
            const { name, title } = action;
            return {
                ...person,
                mentors: [...person.mentors, { name, title }],    
            };   
        }
        case 'deleted' : {
            const { name } = action;
            return {
                ...person,
                mentors: person.mentors.filter((m) => m.name !== name),
            };
        }
        default : {
            throw Error(`알수 없는 액션 타입이다 : ${action.type}`);
        }
    }
}
```

- `person` : update, delete, add 에서 공통적으로 사용하고있는 person 객체를 가져온다.
- `action` : 가져온 person을 가지고 뭘 할건지를 action에 담는다.
- `switch`, `case` 를 사용해서  action의 타입별로 설정한다. (업데이트/추가/삭제)
- 각 타입별로 수행할 액션에 따라서 새로운 person 객체를 리턴한다.
- 타입에 해당하지 않는다면, (default) 에러를 발생시킨다.

<br>

### 👩‍💻 reducer로 만들어준 것 사용하기

```jsx
const [person, dispatch] = useReducer(personReducer, initialPerson);
```

- person : 상태에 접근할 수 있는 변수
- dispatch : 원하는 액션을 명령할 수 있는 변수 (setPerson 과 동일한 기능)

```jsx
onst handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'updated', prev, current });
  };
```

dispatch 써주면, useReducer 가 personReducer 를 호출해준다.

action 에 전달해서 타입별로 함수를 실행하여 새로운 객체를 리턴한다.

액션 로직들이 외부에 있기 때문에(person-reducer.js) 컴포넌트에서는 명령만 해주면 된다. (명령 = dispatch)