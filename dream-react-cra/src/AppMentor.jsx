import React, { useState } from 'react';

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentor: { // 중첩된 객체
      name: '밥',
      title: '시니어개발자',
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          console.log(name);
          setPerson((person) => ({ 
            ...person,
            mentor: { ...person.mentor, name: name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((person) => ({
            ...person, // person 값들을 그대로 복사해오고
            mentor: { 
              ...person.mentor, // mentor에 있는 name, title을 그대로 복사해오고
              title // title만 변수 title에 입력한 값으로 업데이트해줘!
            }
          }))
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}

/* 중첩된 객체의 값 변경하기
  setPerson((person) => ({ 
    ...person,
    mentor: { ...person.mentor, name: name },
  }));

  - …person : person 기존 값들을 복사해 오고,
  - mentor을 변경해 줄건데  
  - mentor는 중첩된 객체 애들을 가지고있기 때문에
  - 다시! …person.mentor 를 복사해 그대로 가져오고
    - mentor 안에 있는 name, title 을 그대로 복사해 오는 것!
  - name 만 업데이트 해주세요!
  - name 을 prompt에서 입력한 변수 name 에 저장된 값으로 변경해준다.
    - name: name 처럼 이름이 같을 경우 name 한번만 적어줘도 된다.
*/