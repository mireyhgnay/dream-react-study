# <div align="center">✏️ React : 이미지 넣는 방법 (이미지 경로)</div>

<br>

## 리액트에서 이미지 경로 설정하기

보통 리액트는 public 폴더에 스태틱리소스들을 넣어서 사용한다.

1. public 폴더에 images 폴더 생성하기
2. images 안에 이미지 추가
3. src 폴더 내에서 작업하는 곳에서 이미지를 불러올 때 경로를 images/ 로 설정해주기

<br>

## import 하지 않고 링크로 바로 설정하여 가져오는 방법

```jsx
import React from "react";

export default function Profile() {
  return (
    <div className="profile">
      <img className="photo" src="images/hinata.jpeg" alt="hinata" />
    </div>
  );
}
```

### 결론적으로, 주소를 사용하는건 그리 좋은 방법은 아닌 듯 하다! import 해서 가져오자!!
