export default function personReducer(person, action) {
    switch (action.type) {
        case 'updated' : {
            const { prev, current } = action;
            // 위 객체 선언은 아래와 같은 것!
            // const prev = action.prev;
            // const current = action.current;
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

                // 기존 리스트 앞쪽으로 추가하고 싶다면?
                // mentors: [ { name, title }, ...person.mentors],       
            };   
        }
        case 'deleted' : {
            const { name } = action;
            return {
                ...person,
                // 기존 name 값과 같지 않은 애들만 골라 새로운 배열 생성
                mentors: person.mentors.filter((m) => m.name !== name),
            };
        }
        default : {
            throw Error(`알수 없는 액션 타입이다 : ${action.type}`);
        }
    }
}