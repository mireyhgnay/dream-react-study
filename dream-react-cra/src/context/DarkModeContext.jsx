import { createContext, useState } from "react";

// 리액트에서 제공해주는 createContext 를 사용해서 context 를 만든다.
// 필요한 데이터를 여기서 가지고 있을 것이다.
export const DrakModeContext = createContext();

// 하위 요소들을 감싸주는 우산 컴포넌트라고 생각하면 된다. 
// 모든 하위 자식들이 요 우산 컴포넌트에 접근이 가능하다.
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode); // toggle 함수

  // Provider를 사용해서 외부족으로 사용할 수 있도록 우산에 담아주는 것이다.
  // value 에는 자식 컴포넌트와 공유하고 싶은 데이터를 지정해주면 된다.
  // 다크모드인지 아닌지 확인할 수 있는 상태 변소(darkMode)와 토글링 함수를 value에 넣음
  return <DrakModeContext.Provider value={{ darkMode: darkMode, toggleDarkMode }}>
    {children}
  </DrakModeContext.Provider>
}
