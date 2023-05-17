# <div align="center">📁 React : 리액트 쿼리(React Query)</div>

<br>

## React-Query 란,

리액트 쿼리는 서버의 값을 클라이언트에 가져오거나, 캐싱, 값 업데이트, 에러핸들링 등 비동기 과정을 더욱 편하게 하는 데 사용됩니다.

어플리케이션의 비동기 데이터를 쉽게 관리, 캐시 및 동기화할 수 있는 React용 라이브러리입니다.

Axios나 Fetch API와 같은 데이터 fetching 라이브러리와 원활하게 작동하도록 설계됩니다.

<br>

## React-Query 장점

주로 프론트 개발자가 구현하기 귀찮은 일들을 수행합니다.

- 외부 API로부터 데이터를 `가져오고, 캐싱하고, 업데이트`할 수 있도록 해줍니다.
- `오류 처리`와 네트워크 상태를 자동으로 관리합니다.
- `데이터를 쪼개서` 가져올 수 있도록 해줍니다.
- 데이터가 실시간으로 **`업데이트`**될 수 있도록 해줍니다.
- 리액트에서 사용하기 쉽고, `코드를 깔끔하게 유지`할 수 있도록 해줍니다.
- 데이터를 언제 `캐싱`할지, 언제 `업데이트` 할지를 설정할 수 있습니다.
- `일관된 API를 제공`하여 데이터를 가져오는 것을 쉽게 해줍니다.

<br>

## React-Query 단점

- 비교적 새로운 라이브러리이기 때문에 버그나 누락된 기능이 있을 수 있습니다.
- 소규모 프로젝트에서 사용 시 프로젝트 규모에 비해 복잡성이 추가될 수 있습니다.

<br>

## 언제 React-Query 를 사용해야할까?

### 클라이언트 데이터보다 서버 데이터에 대한 관리가 더 많을 때!!

<br>

## Install

```bash
npm install react-query
```

**기본 구문**

```jsx
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// Create a client
const queryClient = new QueryClient();

ReactDOM.render(
  // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <Todos />
  </QueryClientProvider>,
  document.getElementById("root")
);
```

<br>

## React-Query 사용하기

### **`useQuery`**

- get API 요청을 수행하기 위한 hook
- post, update 등은 `useMutations`을 사용해야함
- 기본적으로 비동기로 동작하며 여러 `useQuery`를 사용하고 싶다면 `useQueries`를 사용하는 것을 추천

<br>

**useQuery의 반환값**

- **`data`**: fetch한 데이터. 데이터가 fetch될 때까지 **`undefined`** 의 값을 가진다.
- **`status`**: 쿼리의 상태. **`"loading"`**, **`"error"`**, 혹은**`"success"`**의 세가지 종류가 있다.
- **`error`**: 발생한 오류. 발생한 오류가 없다면 **`undefined`** 의 값을 가진다.
- **`isFetching`**: 쿼리가 fetching 중인지 여부를 나타내는 값으로 Boolean 값을 가진다.

<br>

```jsx
function Todos() {
  const { status, data, error } = useQuery("todos", fetchTodoList);

  // 로딩중 상태일 때
  if (status === "loading") {
    return <span>Loading...</span>;
  }

  // 에러 상태일 때
  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

<br>

### **`useQueries`**

여러개의 쿼리를 fetch 할 때 사용한다.

```jsx
const result = useQueries(
	queries : [
	  {
	    queryKey: ["getRune", riot.version],
	    queryFn: () => api.getRunInfo(riot.version)
	  },
	  {
	    queryKey: ["getSpell", riot.version],
	    queryFn: () => api.getSpellInfo(riot.version)
	  }
]);
```

<br>

### **`Query Keys`**

- **useQuery에서 파라미터로 사용되는 Query Key**는 React Query에서 **쿼리 캐싱을 관리**하기 위한 unique key

<br>

### **`Query Cache`**

- 포함된 모든 데이터, 메타 정보 및 쿼리 상태를 저장
- onError, onSuccess 콜백을 사용하여 애플리케이션 전역에서 이벤트를 핸들링

<br>

```jsx
import { QueryCache } from "@tanstack/react-query";

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error);
  },
  onSuccess: (data) => {
    console.log(data);
  },
});

const query = queryCache.find({ queryKey: ["posts"] });
```

<br>

**메소드**

- **`[queryCache.find]` : 캐시에서 기존 쿼리 인스턴스를 가져오는데 사용**
- **`[queryCache.findAll]` : 쿼리키가 부분적으로 일치하는 모든 쿼리 인스턴스를 가져옴**
- **`[queryCache.subscribe]` : 쿼리 캐시 전체를 구독하고 쿼리 상태가 변경되거나 업데이트, 추가 또는 제거시 안전하게 알림을 받을 수 있음**
- **`[queryCache.clear]` : 캐시를 모두 지우고 새롭게 시작**

<br>

### **`useMutation`**

query 와 달리 mutations 는 **데이터를 create, update, delete** 하거나

**서버의 side-effects를 수행**할 때 사용합니다.

<br>

---

<br>

참고 : https://velog.io/@94applekoo/React-Query-총-정리
